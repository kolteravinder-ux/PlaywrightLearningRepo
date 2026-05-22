/*
Q50. REAL PLAYWRIGHT PROJECT SCENARIO:
You have test execution data:
let results = [
  { suite: 'Auth', test: 'Login', duration: 1200, status: 'pass' },
  { suite: 'Auth', test: 'Signup', duration: 1500, status: 'fail' },
  { suite: 'Cart', test: 'Add Item', duration: 800, status: 'pass' },
  { suite: 'Cart', test: 'Checkout', duration: 2000, status: 'pass' },
  { suite: 'Auth', test: 'Logout', duration: 500, status: 'pass' }
]

Generate a summary report:
{
  totalTests: 5,
  passed: 4,
  failed: 1,
  totalDuration: 6000,
  suites: {
    'Auth': { tests: 3, passed: 2, failed: 1, duration: 3200 },
    'Cart': { tests: 2, passed: 2, failed: 0, duration: 2800 }
  }
}

Use reduce(), filter(), map() combinations.
*/
