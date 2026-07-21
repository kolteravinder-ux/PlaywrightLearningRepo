import{test, expect} from '@playwright/test'

test('Locators Methods', async({page})=>{
await page.goto('https://app.vwo.com/')
await expect(page).toHaveTitle('Login - Wingify')

// await page.goto(url: string, 
//     options?: 
//     { 
//         referer?: string; // From which page we are landing to the URL which we have given 
//         timeout?: number; 
//         waitUntil?: "load" | "domcontentloaded" | "networkidle" | "commit"; 
//     }): Promise<Response | null>



//ID attribute
const logoLocator = page.locator('#vwo-login-logo')






})




