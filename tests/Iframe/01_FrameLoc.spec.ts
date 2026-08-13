import {test, expect,type FrameLocator,type Locator} from '@playwright/test'

test('Iframe Handling',async({page})=>{

page.goto('https://app.thetestingacademy.com/playwright/frames/')
await page.pause()

let Frame1: FrameLocator = page.frameLocator('#frame-one')
await page.pause()
Frame1.locator("#RESULT_TextField-1").fill("Maruti")
await page.pause()
Frame1.getByRole('textbox', { name: 'Owner name' }).fill("Aditya Sharma")
await page.pause()
Frame1.locator("#RESULT_TextField-3").fill("MH12AB1234")
await page.pause()
Frame1.locator("#RESULT_RadioButton-1").selectOption("SUV")
Frame1.locator("#RESULT_TextField-4").fill("2026")
await page.pause()
Frame1.locator('#vehicle-submit').click()
await page.pause()

})