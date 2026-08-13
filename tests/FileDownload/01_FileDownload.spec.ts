import {test, expect} from '@playwright/test'
import {path} from 'path'


test.describe("Download file",()=>{

test.beforeEach('Before Each Clas', async({page})=>{

console.log('Before Each test Block')
page.goto('https://app.thetestingacademy.com/playwright/widgets/upload-download')

})

test('Static File Download',async({page})=>{

const staticFileDownload = await Promise.all([
    page.waitForEvent('download'),
    page.locator('download-static').click()

])


})





})