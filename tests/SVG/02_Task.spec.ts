import {test, expect,type Locator} from '@playwright/test'

const URL = "https://www.flipkart.com/search"

test.describe('Flipkart task',()=>{

    test.beforeEach(async({page})=>{
        console.log('Before Each test Block')
        await page.goto(URL)
    })

    
test('Flipkart Task: TC1 @smoke @regression',async({page})=>{
console.log('TC1')
await page.locator('[name="q"]').fill('Macmini')
await page.locator('svg').first().click()

await page.waitForTimeout(2000)

await page.locator('._Omnvo').waitFor({state:'visible'})
const SearchTitle: Locator[] = await page.locator('.pIpigb').all()
const SearchProductPrice: string[] = await page.locator('.fb4uj3 div div:nth-child(1)').allInnerTexts()

console.log("Total Search Titles: ",SearchTitle.length)
console.log("Total Search Product Price: ",SearchProductPrice.length)



let i:number = 1;
let MIN_PRICE: number = Number.MAX_SAFE_INTEGER;
let CheapstPriceTitle: string | null = '';


for(const title of SearchTitle){
console.log(`Title ${i}: ${await title.getAttribute('title')}`)
console.log(`Price ${i}: ${SearchProductPrice[i - 1]}`)

const priceText = SearchProductPrice[i] ?? '';
const productPrice = parseInt(priceText.replace(/[^0-9]/g,''));

if( productPrice < MIN_PRICE) //1000<infinte    10<1000 , 
{
    MIN_PRICE = productPrice
    console.log(`Cheapest Price: ${SearchProductPrice[i - 1]}`)
    CheapstPriceTitle=  await title.getAttribute('title')

}

i++
}

//finding the Cheapest Price
SearchProductPrice.sort((a,b)=>parseInt(a.replace(/[^0-9]/g,'')) - parseInt(b.replace(/[^0-9]/g,'')))
console.log("Cheapest Price: ",SearchProductPrice[0])

console.log("Cheapest Price: ",MIN_PRICE)
console.log("Cheapest Product Title: ",CheapstPriceTitle)






})




})   