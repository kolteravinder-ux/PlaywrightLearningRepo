import {test, expect} from '@playwright/test'

test('Mouse Actions',async({page})=>{

await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu')
await page.pause()

await page.getByTestId('ctx-target').click({button:'right'})
await page.pause()
const menuItems:string[] = await page.locator('ul.context-menu-list span:nth-child(1)').allInnerTexts()
await page.pause()
console.log(menuItems.length)
for(const item of menuItems){
console.log(item)
}
await page.pause()
await page.waitForTimeout(2000)



})