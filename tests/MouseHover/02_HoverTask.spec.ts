import{test, expect} from '@playwright/test'

test('Verify Select Dropdown', async({page})=>{

await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu")
await page.pause()
await page.getByTestId('nav-add-ons').hover()
let AddonsMenu = page.getByTestId('nav-add-ons')
await page.pause()

const AddonsMenuOption: string[] = await AddonsMenu.locator(">div>a").allInnerTexts()

console.log(AddonsMenuOption)
await page.pause()
page.getByTestId("test-id-Wifi").click()
await page.pause()





})