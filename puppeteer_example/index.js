// load Puppeteer
const pt = require("puppeteer");

// this script accepts a url as an argument
let url = new URL(process.argv[2]);
// the filename will be extracted from the hostname of the url
let filename = `${url.hostname}.png`;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// launch Puppeteer and add image parameters
pt.launch().then(async (browser) => {
  const p = await browser.newPage();

  // capture an image that is 1000 x 500 pixels
  await p.setViewport({ width: 1900, height: 1200 });

  // navigate to the site you would like to capture
  await p.goto(url, { waitUntil: "domcontentloaded" });

  delay(5000).then(async () => {
    // take the screenshot of the site and save it to the current folder
    await p.screenshot({ path: filename });

    // close the Puppeteer browser when you are finished.
    await browser.close();

    console.log("done");
  });
});
