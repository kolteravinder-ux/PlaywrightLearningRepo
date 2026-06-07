/*
Q17. Find if ANY test failed in this array:
['pass', 'pass', 'pass', 'fail', 'pass']
Use includes() and return boolean.
*/
let arr= ['pass', 'pass', 'pass', 'fail', 'pass']
console.log(arr.some(x=>x==='fail'))

console.log(arr.includes('fail'))
