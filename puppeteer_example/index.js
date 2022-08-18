const pt = require("puppeteer");

let url = new URL(process.argv[2]);
let filename = `${url.hostname}.png`;

pt.launch().then(async (browser) => {
  const p = await browser.newPage();
  await p.setViewport({ width: 1200, height: 800 });
  await p.goto(url);
  await p.screenshot({ path: filename });
  await browser.close();
});
