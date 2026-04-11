import type { StyledChar, Grid } from "./types";

export const CELL_WIDTH_RATIO = 0.6;

export type ColorMode = "mono" | "source" | "matrix" | "amber" | "neon" | "ice";

export type RenderOptions = {
  lineHeight: number;
  bgColor: string;
  colorMode: ColorMode;
};

const DEFAULT_OPTIONS: RenderOptions = {
  lineHeight: 1.3,
  bgColor: "#201d1d",
  colorMode: "mono",
};

// Preset color ramps from bela-ascii (designed for dark backgrounds)
const PRESETS: Record<
  string,
  (brightness: number) => { r: number; g: number; b: number }
> = {
  matrix: (b) => ({
    r: Math.round(b * 40),
    g: Math.round(30 + b * 225),
    b: Math.round(b * 60),
  }),
  amber: (b) => ({
    r: Math.round(40 + b * 215),
    g: Math.round(20 + b * 160),
    b: Math.round(b * 30),
  }),
  neon: (b) => {
    if (b < 0.33)
      return {
        r: Math.round(100 + b * 3 * 155),
        g: Math.round(b * 3 * 80),
        b: Math.round(150 + b * 3 * 105),
      };
    if (b < 0.66) {
      const t = (b - 0.33) * 3;
      return {
        r: Math.round(255 * (1 - t)),
        g: Math.round(80 + t * 175),
        b: 255,
      };
    }
    const t = (b - 0.66) * 3;
    return {
      r: Math.round(t * 255),
      g: 255,
      b: Math.round(255 * (1 - t)),
    };
  },
  ice: (b) => ({
    r: Math.round(b * 180),
    g: Math.round(60 + b * 195),
    b: Math.round(120 + b * 135),
  }),
};

function getCellColor(cell: StyledChar, colorMode: ColorMode): string {
  const b = cell.entry.brightness;

  switch (colorMode) {
    case "mono": {
      const alpha = Math.max(0.08, Math.min(1, b));
      return `rgba(255, 255, 255, ${alpha})`;
    }
    case "source": {
      const minCh = 30;
      return `rgb(${Math.max(minCh, cell.r)},${Math.max(minCh, cell.g)},${Math.max(minCh, cell.b)})`;
    }
    default: {
      const ramp = PRESETS[colorMode];
      if (ramp) {
        const c = ramp(b);
        return `rgb(${c.r}, ${c.g}, ${c.b})`;
      }
      return `rgba(255, 255, 255, ${b})`;
    }
  }
}

export function renderToCanvas(
  canvas: HTMLCanvasElement,
  grid: Grid<StyledChar>,
  options: Partial<RenderOptions> = {},
): void {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const ctx = canvas.getContext("2d")!;

  const cellHeight = 18 * opts.lineHeight;
  const cellWidth = cellHeight * CELL_WIDTH_RATIO;

  const cssWidth = Math.ceil(grid.cols * cellWidth);
  const cssHeight = Math.ceil(grid.rows * cellHeight);

  const dpr = window.devicePixelRatio || 1;
  canvas.width = cssWidth * dpr;
  canvas.height = cssHeight * dpr;
  ctx.scale(dpr, dpr);

  ctx.fillStyle = opts.bgColor;
  ctx.fillRect(0, 0, cssWidth, cssHeight);

  for (let row = 0; row < grid.rows; row++) {
    const y = row * cellHeight + cellHeight / 2;
    for (let col = 0; col < grid.cols; col++) {
      const cell = grid.data[row * grid.cols + col];
      if (!cell || cell.entry.brightness < 0.02) continue;

      ctx.font = cell.entry.font;
      ctx.textBaseline = "middle";
      ctx.fillStyle = getCellColor(cell, opts.colorMode);

      const x = col * cellWidth;
      const offset = (cellWidth - cell.entry.width) / 2;
      ctx.fillText(cell.entry.char, x + Math.max(0, offset), y);
    }
  }
}
