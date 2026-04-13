import { chromium } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setViewportSize({ width: 600, height: 600 });

  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link href="https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap" rel="stylesheet">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { width: 600px; height: 600px; background: transparent; display: flex; align-items: center; justify-content: center; }
        .logo {
          font-family: 'Pinyon Script', cursive;
          font-size: 340px;
          line-height: 1.2;
          padding: 20px 30px;
          color: #1a1a1a;
        }
        .logo span { color: #e8a0a8; }
      </style>
    </head>
    <body>
      <div class="logo">L<span>J</span></div>
    </body>
    </html>
  `);

  // Wait for font to load
  await page.waitForTimeout(2000);

  const element = await page.$("body");
  const screenshotBuffer = await element!.screenshot({ type: "png", omitBackground: true });

  const outputPath = path.join(process.cwd(), "public", "favicon-logo.png");
  fs.writeFileSync(outputPath, screenshotBuffer);

  console.log("Saved to", outputPath);
  await browser.close();
})();
