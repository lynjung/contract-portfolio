"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { buildPalette, type Palette } from "@/ascii/palette";
import { decodeVideo } from "@/ascii/video-decoder";
import { FrameBuffer } from "@/ascii/buffer";
import { renderToCanvas, CELL_WIDTH_RATIO, type ColorMode } from "@/ascii/renderer";

interface AsciiVideoHeroProps {
  src: string;
  fps?: number;
  density?: number;
  colorMode?: ColorMode;
  onReady?: () => void;
  onLoop?: () => void;
}

export default function AsciiVideoHero({
  src,
  fps = 12,
  density = 100,
  colorMode = "mono",
  onReady,
  onLoop,
}: AsciiVideoHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bufferRef = useRef<FrameBuffer | null>(null);
  const paletteRef = useRef<Palette | null>(null);
  const frameIndexRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastFrameTimeRef = useRef(0);
  const delaysRef = useRef<number[]>([]);
  const videoDataRef = useRef<{
    width: number;
    height: number;
  } | null>(null);
  const videoFramesRef = useRef<ImageData[]>([]);

  const [status, setStatus] = useState<
    "loading" | "building" | "processing" | "ready"
  >("loading");
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
      onReady?.();
    }
  }, [onReady]);

  const calculateGrid = useCallback(
    (cols: number) => {
      if (!videoDataRef.current) return null;

      const cellHeight = 18 * 1.3;
      const cellWidth = cellHeight * CELL_WIDTH_RATIO;
      const videoAspect =
        videoDataRef.current.width / videoDataRef.current.height;
      const rows = Math.round((cols * CELL_WIDTH_RATIO) / videoAspect);

      return { cols, rows, cellWidth };
    },
    [],
  );

  const colorModeRef = useRef(colorMode);
  colorModeRef.current = colorMode;

  const onLoopRef = useRef(onLoop);
  onLoopRef.current = onLoop;

  const renderFrame = useCallback((index: number) => {
    const buffer = bufferRef.current;
    const canvas = canvasRef.current;
    if (!buffer || !canvas) return;

    const grid = buffer.getFrame(index);
    renderToCanvas(canvas, grid, {
      bgColor: "#201d1d",
      colorMode: colorModeRef.current,
    });
  }, []);

  const startPlayback = useCallback(() => {
    const buffer = bufferRef.current;
    if (!buffer || buffer.totalFrames <= 1) return;

    // Cancel any existing loop
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const frameDuration = 1000 / fps;

    const tick = (timestamp: number) => {
      if (!lastFrameTimeRef.current) {
        lastFrameTimeRef.current = timestamp;
      }

      const elapsed = timestamp - lastFrameTimeRef.current;
      const delay = delaysRef.current[frameIndexRef.current] || frameDuration;

      if (elapsed >= delay) {
        lastFrameTimeRef.current = timestamp - (elapsed % delay);
        const nextIndex =
          (frameIndexRef.current + 1) % buffer.totalFrames;

        // Detect loop restart
        if (nextIndex === 0 && frameIndexRef.current !== 0) {
          onLoopRef.current?.();
        }

        frameIndexRef.current = nextIndex;
        renderFrame(nextIndex);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    lastFrameTimeRef.current = 0;
    rafRef.current = requestAnimationFrame(tick);
  }, [fps, renderFrame]);

  // Initial load: build palette, decode video
  useEffect(() => {
    let cancelled = false;

    if (window.matchMedia("(pointer: coarse)").matches) return;

    const bailout = setTimeout(() => {
      if (!cancelled) { cancelled = true; onReady?.(); }
    }, 10000);

    async function init() {
      setStatus("building");
      const palette = buildPalette();
      if (cancelled) return;
      paletteRef.current = palette;

      setStatus("loading");
      let video;
      try {
        video = await decodeVideo(src, fps, (done, total) => {
          if (!cancelled) setProgress(Math.round((done / total) * 100));
        });
      } catch {
        if (!cancelled) { cancelled = true; clearTimeout(bailout); onReady?.(); }
        return;
      }
      if (cancelled) return;

      videoDataRef.current = { width: video.width, height: video.height };
      videoFramesRef.current = video.frames;
      delaysRef.current = video.delays;

      // Process with initial density
      const gridInfo = calculateGrid(density);
      if (!gridInfo || cancelled) return;

      const buffer = new FrameBuffer(
        video.frames,
        palette,
        gridInfo.cols,
        gridInfo.rows,
        gridInfo.cellWidth,
      );
      bufferRef.current = buffer;

      setStatus("processing");
      await buffer.processAllAsync(3, (done, total) => {
        if (!cancelled) setProgress(Math.round((done / total) * 100));
      });
      if (cancelled) return;

      clearTimeout(bailout);
      setStatus("ready");
      renderFrame(0);
      startPlayback();
      onReady?.();
    }

    init();

    return () => {
      cancelled = true;
      clearTimeout(bailout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, fps]);

  // Re-process when density changes (after initial load)
  useEffect(() => {
    const palette = paletteRef.current;
    const frames = videoFramesRef.current;
    if (!palette || frames.length === 0 || !videoDataRef.current) return;
    if (status !== "ready") return;

    const gridInfo = calculateGrid(density);
    if (!gridInfo) return;

    // Cancel playback during re-process
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const buffer = new FrameBuffer(
      frames,
      palette,
      gridInfo.cols,
      gridInfo.rows,
      gridInfo.cellWidth,
    );
    bufferRef.current = buffer;

    // Process synchronously (fast enough for density changes)
    for (let i = 0; i < frames.length; i++) {
      buffer.processFrame(i);
    }

    frameIndexRef.current = 0;
    renderFrame(0);
    startPlayback();
  }, [density, calculateGrid, renderFrame, startPlayback, status]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (status !== "ready") return;
      renderFrame(frameIndexRef.current);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [renderFrame, status]);

  if (isMobile) {
    return (
      <div className="flex flex-col items-center">
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="max-h-[60vh] max-w-full rounded-2xl"
        />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="flex flex-col items-center">
      {status !== "ready" && (
        <div className="flex flex-col items-center justify-center py-32 gap-3">
          <div className="w-48 h-px bg-border relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-text-muted transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-text-muted font-mono">
            {status === "building" && "Building character palette..."}
            {status === "loading" && `Extracting frames... ${progress}%`}
            {status === "processing" && `Processing... ${progress}%`}
          </p>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`max-h-[60vh] max-w-full h-auto rounded-2xl transition-opacity duration-500 ${
          status === "ready" ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />
    </div>
  );
}
