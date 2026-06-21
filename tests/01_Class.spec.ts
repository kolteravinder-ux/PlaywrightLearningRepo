import {test, expect} from '@playwright/test'

//fixture- Internal Habits or internal code which can be used when ever we want by using 'page' keyword
//page- Inbuilt fixture is automatically given to you
//which are the functions you can directly use in playwright

test("Verify that the title will be TTA Cart", async({page})=>{
await page.goto("https://app.thetestingacademy.com/playwright/ttacart/")
await expect(page).toHaveTitle("TTACart - Login")
await page.waitForTimeout(5000)
})

test("Doing Login", async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/")
await expect(page).toHaveTitle("TTACart - Login")
 await   page.getByPlaceholder('Username').fill('standard_user')
 await   page.getByPlaceholder('Password').fill('tta_secret')
  await  page.getByRole('button', {name:/login/i}).click();

await expect(page).toHaveTitle("TTACart - Products",{timeout:3000});

    
})

