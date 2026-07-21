import{test, expect} from '@playwright/test'

test('Task for Select Dropdown', async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.pause()

await page.getByRole('textbox', {name:"username"}).fill('Admin')
await page.getByRole('textbox', {name:"password"}).fill('admin123')

await page.getByRole('button', {name:"Login"}).click()

await page.getByRole('link', { name: 'PIM' }).click()

let TableRightArrowButton = await page.locator("[aria-label='Pagination Navigation'] > ul>li>button[class*='--previous-next']>i[class*='-chevron-right']").count()
console.log("Pages in table:",TableRightArrowButton)
do{

    //Full-Time Permanent
    let EmpStatusrow= page.locator("[class*='-table-row--clickable']").filter({hasText:'Part-Time Internship'})
    console.log(EmpStatusrow)

    console.log("Employee Status row found:",await EmpStatusrow.count()) 
    if(await EmpStatusrow.count() >0)
    {
        await EmpStatusrow.locator(".oxd-icon.bi-trash").click()
        break
    }

TableRightArrowButton = await page.locator("[aria-label='Pagination Navigation'] > ul>li>button[class*='--previous-next']>i[class*='-chevron-right']").count()
console.log("Pages in table:",TableRightArrowButton)
if(TableRightArrowButton>0)
    await page.locator("[aria-label='Pagination Navigation'] > ul>li>button[class*='--previous-next']>i[class*='-chevron-right']").click()

}while(TableRightArrowButton>0)


})