import {test, expect} from '@playwright/test'

test('Handle Alerts for Websites',async({page})=>{

await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
await page.pause()

// page.once('dialog',async(dialog)=>{
// await dialog.accept()
// })
// page.getByRole('button',{name:'Click for JS Alert'}).click()
// await page.pause()
// await page.waitForTimeout(2000)

page.once('dialog',async(dialog)=>{
await dialog.dismiss()
})
page.getByRole('button',{name:'Click for JS Confirm'}).click()




// await page.pause()
// await page.waitForTimeout(2000)
// page.once('dialog',async(dialog)=>{
// await dialog.accept('Ravindra')
// })
// page.getByRole('button',{name:'Click for JS Prompt'}).click()
await page.pause()






})