/*
Q24. Filter out failed tests:
let results = [
  { test: 'Login', status: 'pass' },
  { test: 'Signup', status: 'fail' },
  { test: 'Checkout', status: 'pass' }
]
Use filter() to get only passed tests.
Expected Output: Array with 2 objects (Login and Checkout)
*/
let results = [
  { test: 'Login', status: 'pass' },
  { test: 'Signup', status: 'fail' },
  { test: 'Checkout', status: 'pass' }
]

let ans=results.filter(x=>x.status==='pass')
  console.log(ans)

