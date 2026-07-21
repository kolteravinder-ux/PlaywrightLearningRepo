import {test, expect} from '@playwright/test'

test('sending text sequentilly', async({page})=>{

    await page.goto('https://awesomeqa.com/practice.html')

    await page.locator('[name="firstname"]').pressSequentially("Ravindra Kolate",{delay:200})


})