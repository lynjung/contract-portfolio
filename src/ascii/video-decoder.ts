export type VideoResult = {
  frames: ImageData[];
  delays: number[];
  width: number;
  height: number;
};

export async function decodeVideo(
  url: string,
  targetFps: number = 12,
  onProgress?: (done: number, total: number) => void,
): Promise<VideoResult> {
  const video = document.createElement("video");
  video.muted = true;
  video.playsInline = true;
  video.preload = "auto";
  video.crossOrigin = "anonymous";
  video.src = url;

  await new Promise<void>((resolve, reject) => {
    video.onloadedmetadata = () => resolve();
    video.onerror = () => reject(new Error("Failed to load video"));
    setTimeout(() => reject(new Error("Metadata timeout")), 8000);
  });

  const width = video.videoWidth;
  const height = video.videoHeight;
  const duration = video.duration;

  if (!isFinite(duration) || duration <= 0) {
    throw new Error("Cannot determine video duration");
  }

  const frameInterval = 1 / targetFps;
  const totalFrames = Math.floor(duration * targetFps);
  const delay = Math.round(frameInterval * 1000);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;

  const isMobile = window.matchMedia("(pointer: coarse)").matches;

  if (isMobile) {
    // Play-through capture: avoids unreliable seek on mobile Safari
    return new Promise((resolve, reject) => {
      const frames: ImageData[] = [];
      const delays: number[] = [];
      let lastCaptureTime = -1;

      video.ontimeupdate = () => {
        const t = video.currentTime;
        if (t - lastCaptureTime >= frameInterval * 0.9) {
          lastCaptureTime = t;
          ctx.drawImage(video, 0, 0, width, height);
          frames.push(ctx.getImageData(0, 0, width, height));
          delays.push(delay);
          onProgress?.(frames.length, totalFrames);
        }
      };

      video.onended = () => {
        resolve({ frames, delays, width, height });
      };

      video.onerror = () => reject(new Error("Playback error"));
      setTimeout(() => resolve({ frames, delays, width, height }), (duration + 5) * 1000);

      video.playbackRate = 4;
      video.play().catch(() => {
        // Autoplay blocked — fall back to seek
        video.ontimeupdate = null;
        video.onended = null;
        seekDecode(video, ctx, width, height, totalFrames, frameInterval, delay, onProgress)
          .then(resolve).catch(reject);
      });
    });
  }

  return seekDecode(video, ctx, width, height, totalFrames, frameInterval, delay, onProgress);
}

async function seekDecode(
  video: HTMLVideoElement,
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  totalFrames: number,
  frameInterval: number,
  delay: number,
  onProgress?: (done: number, total: number) => void,
) {
  const frames: ImageData[] = [];
  const delays: number[] = [];

  for (let i = 0; i < totalFrames; i++) {
    video.currentTime = i * frameInterval;
    await new Promise<void>((resolve) => {
      const timeout = setTimeout(resolve, 500);
      video.onseeked = () => { clearTimeout(timeout); resolve(); };
    });

    ctx.drawImage(video, 0, 0, width, height);
    frames.push(ctx.getImageData(0, 0, width, height));
    delays.push(delay);
    onProgress?.(i + 1, totalFrames);
  }

  return { frames, delays, width, height };
}
