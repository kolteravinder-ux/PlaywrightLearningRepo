/*
Q15. Find the index of the first failed test:
let testResults = [
  { id: 1, status: 'pass' },
  { id: 2, status: 'pass' },
  { id: 3, status: 'fail' },
  { id: 4, status: 'pass' }
]
Use findIndex() and return the index.
Expected Output: 2
*/

let testResults = [
  { id: 1, status: 'pass' },
  { id: 2, status: 'pass' },
  { id: 3, status: 'fail' },
  { id: 4, status: 'pass' }
]

console.log(testResults.findIndex(x=>x.status!=='pass'))

