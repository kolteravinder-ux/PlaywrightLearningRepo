//https://www.flipkart.com/

import {test, expect} from '@playwright/test'

const URL = "https://www.flipkart.com/"

test.describe('Flipkart task',()=>{

    test.beforeEach(async({page})=>{
        console.log('Before Each test Block')
        await page.goto(URL)
    })

    //npx  playwright test tests/SVG/01_TestDescribe.spec.ts --headed --project=Chromium --grep @smoke 
    // // will run only smoke tag tC
test('Flipkart Task: TC1 @smoke @regression',async({page})=>{
console.log('TC1')
})

test('Flipkart Task: TC2 @regression ',async({page})=>{
    console.log('TC2')
})


})   