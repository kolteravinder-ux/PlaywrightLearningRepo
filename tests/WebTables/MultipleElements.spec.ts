import{test, expect} from '@playwright/test'

test('Verify Element Filter', async({page})=>{

await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter")
const allInnerTextOfLink  = await page.locator('a.list-group-item').allInnerTexts()
console.log("allInnerTextOfLink:",allInnerTextOfLink.length)



let ForgottenLink = page.locator('a.list-group-item').filter({hasText:"Forgotten Password"})
ForgottenLink.click()

let ForgottenText = await page.locator("#toast")
ForgottenText.waitFor({state:'visible'})

console.log(await ForgottenText.innerText())





})