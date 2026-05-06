const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  // This will trigger Playwright Inspector when PWDEBUG=1 is set
  await page.pause();
  await browser.close();
})();
