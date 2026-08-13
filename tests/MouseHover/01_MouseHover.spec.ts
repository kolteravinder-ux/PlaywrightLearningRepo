import{test, expect} from '@playwright/test'

test('Verify Select Dropdown', async({page})=>{

await page.goto("https://www.spicejet.com/")
await page.pause()
page.getByText("Add-ons",{exact:true}).hover()
await page.pause()
page.getByText("FlyEarly",{exact:true}).click()
await page.pause()





})