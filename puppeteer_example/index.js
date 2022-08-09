const pt = require('puppeteer')
pt.launch().then(async browser => {
  const p = await browser.newPage();
  await p.setViewport({ width: 1000, height: 500})
  await p.goto('https://urlbox.io')
  await p.screenshot({path:'urlbox.png'})
  await browser.close();
})
