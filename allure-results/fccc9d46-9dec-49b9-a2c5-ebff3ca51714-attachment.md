# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebTables\Task_10July.spec.ts >> Task for Select Dropdown
- Location: tests\WebTables\Task_10July.spec.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | import{test, expect} from '@playwright/test'
  2  | 
  3  | test('Task for Select Dropdown', async({page})=>{
  4  | 
> 5  | await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     |            ^ Error: page.goto: Test timeout of 30000ms exceeded.
  6  | await page.pause()
  7  | 
  8  | await page.getByRole('textbox', {name:"username"}).fill('Admin')
  9  | await page.getByRole('textbox', {name:"password"}).fill('admin123')
  10 | 
  11 | await page.getByRole('button', {name:"Login"}).click()
  12 | 
  13 | await page.getByRole('link', { name: 'PIM' }).click()
  14 | 
  15 | let TableRightArrowButton = await page.locator("[aria-label='Pagination Navigation'] > ul>li>button[class*='--previous-next']>i[class*='-chevron-right']").count()
  16 | console.log("Pages in table:",TableRightArrowButton)
  17 | do{
  18 | 
  19 |     //Full-Time Permanent
  20 |     let EmpStatusrow= page.locator("[class*='-table-row--clickable']").filter({hasText:'Full-Time Permanent'})
  21 |     console.log(EmpStatusrow)
  22 | 
  23 |     console.log(await EmpStatusrow.count()) 
  24 |     if(await EmpStatusrow.count() >0)
  25 |     {
  26 |         await EmpStatusrow.locator(".oxd-icon.bi-trash").click()
  27 |         break
  28 |     }
  29 | 
  30 | TableRightArrowButton = await page.locator("[aria-label='Pagination Navigation'] > ul>li>button[class*='--previous-next']>i[class*='-chevron-right']").count()
  31 | console.log("Pages in table:",TableRightArrowButton)
  32 | }while(TableRightArrowButton>0)
  33 | 
  34 | 
  35 | })
```