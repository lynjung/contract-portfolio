import type { Grid } from "./types";

export type BrightnessGrid = Grid<number>;

export function sampleBrightness(
  imageData: ImageData,
  cols: number,
  rows: number,
): BrightnessGrid {
  const { data, width: imgWidth } = imageData;
  const cw = imageData.width;
  const ch = imageData.height;
  const cellW = cw / cols;
  const cellH = ch / rows;
  const grid: number[] = new Array(cols * rows);

  for (let row = 0; row < rows; row++) {
    const y0 = Math.floor(row * cellH);
    const y1 = Math.min(Math.floor((row + 1) * cellH), ch);
    for (let col = 0; col < cols; col++) {
      const x0 = Math.floor(col * cellW);
      const x1 = Math.min(Math.floor((col + 1) * cellW), cw);

      let sum = 0;
      let count = 0;
      for (let y = y0; y < y1; y++) {
        const rowOffset = y * imgWidth * 4;
        for (let x = x0; x < x1; x++) {
          const i = rowOffset + x * 4;
          sum +=
            0.299 * data[i]! + 0.587 * data[i + 1]! + 0.114 * data[i + 2]!;
          count++;
        }
      }
      grid[row * cols + col] = count > 0 ? sum / count / 255 : 0;
    }
  }

  return { cols, rows, data: grid };
}
