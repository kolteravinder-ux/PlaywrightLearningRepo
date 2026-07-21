import{test, expect} from '@playwright/test'

test('Verify Element Filter', async({page})=>{

await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable")
let NextPageAttribute = await page.locator("#next-page").getAttribute("disabled")
console.log("Next Page Attribute Value:",NextPageAttribute)


let email
 let country

do
{
    NextPageAttribute = await page.locator("#next-page").getAttribute("disabled")
    console.log("Next Page Attribute Value:",NextPageAttribute)

    let row =page.locator("#employees-tbody tr").filter({hasText:"Camila Lopez"})
    console.log(row)

    console.log(await row.count()) 
    if(await row.count() >0)
    {
     email=await row.locator("td[data-col='email']").innerText()
     country=await row.locator("td[data-col='country']").innerText()
    break
    }

    await page.waitForTimeout(5000)
    await page.locator("#next-page").click()



}while (NextPageAttribute === null)



console.log("Email:",email)
console.log("Country:",country)





})