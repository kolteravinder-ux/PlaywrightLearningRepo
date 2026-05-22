/*
Q14. Find the first test result that is NOT "pass":
let results = ['pass', 'pass', 'fail', 'pass', 'skip']
Use find() method.
Expected Output: "fail"
*/
let results = ['pass', 'pass', 'fail', 'pass', 'skip']

console.log(results.find(x=>x!=='pass'))