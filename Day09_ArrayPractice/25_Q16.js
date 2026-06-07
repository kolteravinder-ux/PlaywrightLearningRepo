/*
Q16. PLAYWRIGHT SCENARIO:
You have an array of locators: ['#btn1', '.btn2', '#btn3', '.btn4']
Find all locators that start with '#' (ID selectors).
Use filter() method.
Expected Output: ['#btn1', '#btn3']
*/
let loc =['#btn1', '.btn2', '#btn3', '.btn4']

let newArr= loc.filter(x=>x.startsWith('#'))
console.log(loc)
console.log(newArr)
