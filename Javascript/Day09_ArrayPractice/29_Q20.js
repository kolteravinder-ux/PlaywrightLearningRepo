/*
Q20. Check if all tests passed:
let results = ['pass', 'pass', 'pass']
Write a function using a loop or method.
Return true if all are 'pass', false otherwise.
*/
let results = ['pass', 'pass', 'pass']
console.log(results.every(r=>r==="pass"))

let testRes =verifyTestResult(results)
console.log(testRes)  // through function

function verifyTestResult(arr)
{
return arr.every(x=>x==="pass")
}



