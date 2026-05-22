/*
Q13. Given: let statuses = ['pass', 'fail', 'pass', 'skip', 'fail', 'pass']
Find the LAST occurrence of 'fail' using lastIndexOf().
Expected Output: 4
*/
let statuses = ['pass', 'fail', 'pass', 'skip', 'fail', 'pass']

console.log(statuses.findLastIndex(x=>x==='fail'))
console.log(statuses.lastIndexOf('fail'))
