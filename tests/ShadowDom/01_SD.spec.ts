import {test, expect} from '@playwright/test'
const URL = "https://app.thetestingacademy.com/playwright/widgets/shadow-dom"
test.describe('Shadow DOM',()=>{


test.beforeEach(async({page})=>{
page.goto(URL)
})


test('Shadow DOM test', async({page})=>{
const card= page.getByTestId('card-account')
await card.getByTestId('card-account-email').fill('ABC@gmail.com')

await card.getByTestId('card-account-password').fill('ABC123')
await card.getByTestId('card-account-submit').click()

await page.waitForTimeout(2000)

})




})