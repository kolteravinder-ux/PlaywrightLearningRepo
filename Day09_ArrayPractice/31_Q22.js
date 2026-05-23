/*
Q22. PLAYWRIGHT SCENARIO:
You have locators: ['#username', '#password', '#submit']
Add 'await page.click()' to each locator.
Use map() to create: ['await page.click("#username")', ...]
*/

let loc= ['#username', '#password', '#submit']
let arr=new Array()
loc.forEach((v,i)=>{
arr.push(`await page.click(${v})`)
})

console.log(arr)