// this example uses chromium. you may also use 'webkit' or 'firefox'
const chromium = require("playwright").chromium;

(async () => {
  // launch a chromium instance
  const browser = await chromium.launch();

  // create and load a new page 'context'
  const context = await browser.newContext();
  const page = await context.newPage();

  // navigate to your url
  await page.goto("https://www.urlbox.io");

  // take the screenshot
  await page.screenshot({ path: "screenshot.png" });

  // close the chromium instance
  await browser.close();
})();
