// this example uses chromium. you may also use 'webkit' or 'firefox'
const chromium = require("playwright").chromium;

let url = new URL(process.argv[2]);
let filename = `${url.hostname}.png`;

(async () => {
  // launch a chromium instance
  const browser = await chromium.launch();

  // create and load a new page 'context'
  const context = await browser.newContext();
  const page = await context.newPage();

  // navigate to your url
  await page.goto(url);

  // take the screenshot
  await page.screenshot({ path: filename });

  // close the chromium instance
  await browser.close();
})();
