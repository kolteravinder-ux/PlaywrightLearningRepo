/*
Q25. Get only even numbers from: [1,2,3,4,5,6,7,8,9,10]
Use filter() method.
Expected Output: [2,4,6,8,10]
*/

let arr= [1,2,3,4,5,6,7,8,9,10]

let ele=arr.filter(x=>x%2===0?x:null)
console.log(ele)