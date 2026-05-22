// Q2. Given an array of test results: ["pass", "fail", "pass", "skip", "pass"]
// Count how many tests passed.
// Expected Output: 3

let arr=["pass", "fail", "pass", "skip", "pass"]
// let count=arr.reduce((ele,index)=>{

//     ele[index] = (ele[index] || 0) +1
// return ele;

// },{})
// console.log(count)


let cntofpass = arr.filter(a=>a==='pass').length
console.log(cntofpass)