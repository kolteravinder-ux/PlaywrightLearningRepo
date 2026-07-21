import {test, expect} from '@playwright/test'

test('Verify signup error', async({page})=>{

// await page.goto('https://vwo.com/free-trial/',{waitUntil:'commit'})
// console.log("'commit' - consider operation to be finished when network response is received and the document started loading")

// await page.goto('https://vwo.com/free-trial/',{waitUntil:'domcontentloaded'})
// console.log("'domcontentloaded' - consider operation to be finished when the DOMContentLoaded event is fired.")

// await page.goto('https://vwo.com/free-trial/',{waitUntil:'load'})
// console.log("'load' - consider operation to be finished when the load event is fired.")

await page.goto('https://vwo.com/free-trial/',{waitUntil:'networkidle'})
console.log("'networkidle' - DISCOURAGED consider operation to be finished when there are no network connections for at least 500 ms. Don't use this method for testing, rely on web assertions to assess readiness instead.")

await page.getByRole('textbox',{name:'email'}).fill('Abcsd@gmail.com')

//await page.locator("#page-free-trial-step1-cu-gdpr-consent-checkbox").click()
await page.getByRole('checkbox').check()


//await page.locator("[data-qa='page-su-submit']").first().click()
await page.getByRole('button',{name:'Create a Free Trial Account'}).click()


const errormsg = page.locator("div[class*='invalid-input-group'] [class*='invalid-reason']")

expect(errormsg).toContainText("gmail.com doesn't look like a business domain. Please use your business email.")

})

