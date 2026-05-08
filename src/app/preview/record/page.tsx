"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { buildPalette } from "@/ascii/palette";
import { decodeVideo } from "@/ascii/video-decoder";
import { FrameBuffer } from "@/ascii/buffer";
import { renderToCanvas, CELL_WIDTH_RATIO } from "@/ascii/renderer";

type Stage = "idle" | "decoding" | "recording" | "done";

export default function RecordPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stage, setStage] = useState<Stage>("idle");
  const [progress, setProgress] = useState(0);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const run = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setStage("decoding");
    setProgress(0);

    const palette = buildPalette();
    const video = await decodeVideo("/portfolio_video.mp4", 12, (done, total) => {
      setProgress(Math.round((done / total) * 80));
    });

    const cols = 100;
    const cellHeight = 18 * 1.3;
    const cellWidth = cellHeight * CELL_WIDTH_RATIO;
    const videoAspect = video.width / video.height;
    const rows = Math.round((cols * CELL_WIDTH_RATIO) / videoAspect);

    const buffer = new FrameBuffer(video.frames, palette, cols, rows, cellWidth);
    for (let i = 0; i < video.frames.length; i++) {
      buffer.processFrame(i);
      if (i % 10 === 0) setProgress(80 + Math.round((i / video.frames.length) * 15));
    }

    // Render first frame to size the canvas
    renderToCanvas(canvas, buffer.getFrame(0), { bgColor: "#201d1d", colorMode: "mono" });

    setStage("recording");
    setProgress(96);

    const stream = canvas.captureStream(12);
    const recorder = new MediaRecorder(stream, {
      mimeType: MediaRecorder.isTypeSupported("video/webm;codecs=vp9")
        ? "video/webm;codecs=vp9"
        : "video/webm",
    });

    const chunks: Blob[] = [];
    recorder.ondataavailable = (e) => { if (e.data.size > 0) chunks.push(e.data); };

    await new Promise<void>((resolve) => {
      recorder.onstop = () => resolve();
      recorder.start();

      const fps = 12;
      const frameDuration = 1000 / fps;
      let frameIndex = 0;
      let lastTime = 0;

      const totalFrames = buffer.totalFrames;
      const totalDuration = totalFrames * frameDuration;

      const tick = (timestamp: number) => {
        if (!lastTime) lastTime = timestamp;
        const elapsed = timestamp - lastTime;

        if (elapsed >= frameDuration) {
          lastTime = timestamp - (elapsed % frameDuration);
          renderToCanvas(canvas, buffer.getFrame(frameIndex), {
            bgColor: "#201d1d",
            colorMode: "mono",
          });
          frameIndex++;
          if (frameIndex >= totalFrames) {
            recorder.stop();
            return;
          }
        }
        requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);

      // Safety timeout
      setTimeout(() => { if (recorder.state === "recording") recorder.stop(); }, totalDuration + 2000);
    });

    const blob = new Blob(chunks, { type: "video/webm" });
    setVideoUrl(URL.createObjectURL(blob));
    setProgress(100);
    setStage("done");
  }, []);

  return (
    <div className="min-h-screen bg-[#201d1d] p-12 flex flex-col items-center gap-8">
      <h2 className="text-xs font-mono uppercase tracking-widest text-white/40">
        ASCII Video Recorder
      </h2>

      <canvas ref={canvasRef} className="rounded-xl max-w-full" />

      {stage === "idle" && (
        <button
          onClick={run}
          className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-mono transition"
        >
          Start recording
        </button>
      )}

      {(stage === "decoding" || stage === "recording") && (
        <div className="flex flex-col items-center gap-2">
          <div className="w-48 h-px bg-white/20 relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-white/60 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs font-mono text-white/40">
            {stage === "decoding" ? `Decoding... ${progress}%` : "Recording..."}
          </p>
        </div>
      )}

      {stage === "done" && videoUrl && (
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs font-mono text-white/60">
            Done! Download and save to <code className="text-white/90">/public/ascii-hero.webm</code>
          </p>
          <a
            href={videoUrl}
            download="ascii-hero.webm"
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-mono transition"
          >
            Download ascii-hero.webm
          </a>
          <video src={videoUrl} autoPlay loop muted playsInline className="rounded-xl max-w-full mt-4" />
        </div>
      )}
    </div>
  );
}
