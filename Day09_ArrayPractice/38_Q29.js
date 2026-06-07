/*
Q29. Chain multiple operations:
Given: [1,2,3,4,5,6,7,8,9,10]
- Filter even numbers
- Square each number
- Sum them all
Use filter() → map() → reduce()
Expected Output: 220 (4+16+36+64+100)
*/
let arr= [1,2,3,4,5,6,7,8,9,10]

let newarr=arr.filter((a,i)=> a%2===0?a:null).map(x=>x*x).reduce((a,b)=>a+b)
console.log(newarr)