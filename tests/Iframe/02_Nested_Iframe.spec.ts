import {test, expect,type FrameLocator,type Locator} from '@playwright/test'

test('Iframe Handling',async({page})=>{

page.goto('https://app.thetestingacademy.com/playwright/frames/nested-iframes')
await page.pause()

let Frame1: FrameLocator = page.frameLocator('#pact1')
await page.pause()
let Frame2: FrameLocator = Frame1.frameLocator('#pact2')
let Frame3: FrameLocator = Frame2.frameLocator('#pact3')

Frame3.getByRole('textbox', { name: 'Language used at this level' }).fill("Aditya Sharma")
await page.pause()



})