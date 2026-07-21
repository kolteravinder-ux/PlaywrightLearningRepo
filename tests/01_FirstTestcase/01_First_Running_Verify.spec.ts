import{test, expect} from '@playwright/test'
//test and expect is interface


test('Verify our first test case', async({page})=>{
await page.goto('https://app.vwo.com/')
await expect(page).toHaveTitle('Login - Wingify')
const logoLocator = page.locator('#vwo-login-logo')
expect(logoLocator).toBeVisible;
})
