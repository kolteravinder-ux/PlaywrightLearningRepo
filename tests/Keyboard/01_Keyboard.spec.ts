import {test, expect} from '@playwright/test'

test('Keyboard Actions',async({page})=>{

await page.goto('https://www.toptal.com/developers/keycode')
await page.pause()

await page.keyboard.press('A')

await page.screenshot({path:'tests/Keywboard_Mouse/Screenshots/01_Keyboard.png',fullPage:true})

await page.keyboard.press('ArrowLeft')
await page.keyboard.press('Shift+ArrowLeft')

await page.locator('#id1').click({button:'right'})




})
