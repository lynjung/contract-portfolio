import { chromium } from "@playwright/test";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // Collect console errors
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));

  await page.goto("http://localhost:3002", { waitUntil: "networkidle" });

  // Wait for the ASCII canvas to render
  try {
    await page.waitForFunction(
      () => {
        const canvas = document.querySelector("canvas");
        return canvas && canvas.width > 10 && canvas.height > 10;
      },
      { timeout: 60000 },
    );
    await page.waitForTimeout(1500);
  } catch {
    console.log("Canvas did not render in time");
  }

  // Scroll down to trigger section animations, then scroll back
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);

  await page.screenshot({ path: "/tmp/portfolio-v4.png", fullPage: true });
  console.log("Screenshot saved to /tmp/portfolio-v4.png");

  if (errors.length > 0) {
    console.log("\nConsole errors:");
    errors.forEach((e) => console.log("  -", e));
  } else {
    console.log("No console errors");
  }

  await browser.close();
})();
