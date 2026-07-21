import{test, expect} from '@playwright/test'

test('Verify Element Filter', async({page})=>{

await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable")


 let country

    let row =page.locator("#companies-table tr").filter({hasText:"Yoshi Tannamuri"})
    console.log(row)

    console.log(await row.count()) 
    if(await row.count() >0)
    {
      country=await row.locator("td[data-col='country']").innerText()
    
    }
    else
       console.log("Not able to find the Name Yoshi Tannamuri");
        

    await page.waitForTimeout(5000)





console.log("Country:",country)





})