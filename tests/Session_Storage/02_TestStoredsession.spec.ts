import {test, expect} from '@playwright/test'

test.use({
    storageState:"./user-session.json"
})



test("Go to directly dashboard", async({page})=>{
await page.goto("https://app.wingify.com/#/dashboard?accountId=1227004")
await expect(page).toHaveURL(/dashboard/)
await page.waitForTimeout(3000)
})

test("Go to directly Settings", async({page})=>{
await page.goto("https://app.wingify.com/#/settings/accounts/general?accountId=1227004")
await expect(page).toHaveURL(/settings/)
await page.waitForTimeout(3000)
})