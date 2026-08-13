import{test, expect} from '@playwright/test'
import{chromium} from 'playwright'



test('Verify the title', async({browser})=>{
const b1 = await chromium.launch({headless:false})
const browserC1= await browser.newContext()
const page1 =await browserC1.newPage()


await page1.goto('https://app.vwo.com/')
await expect(page1).toHaveTitle('Login - Wingify')


const browserC2= await browser.newContext()
const page2 =await browserC2.newPage()


await page2.goto('https://www.google.com/')
await expect(page2).toHaveTitle('Google')


})