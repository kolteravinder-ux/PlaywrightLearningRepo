/*
Q43. PLAYWRIGHT REAL SCENARIO:
Merge test results from multiple browsers:
let chrome = [{ test: 'Login', status: 'pass' }]
let firefox = [{ test: 'Login', status: 'fail' }]
let safari = [{ test: 'Login', status: 'pass' }]


Combine into single array with browser name added.
Expected Output:
[
  { test: 'Login', status: 'pass', browser: 'chrome' },
  { test: 'Login', status: 'fail', browser: 'firefox' },
  { test: 'Login', status: 'pass', browser: 'safari' }
]
*/

let chrome = [{ test: 'Login', status: 'pass' }]
let firefox = [{ test: 'Login', status: 'fail' }]
let safari = [{ test: 'Login', status: 'pass' }]

// const mergedResults = [
//   ...chrome.map(r => ({ ...r, browser: 'chrome' })),
//   ...firefox.map(r => ({ ...r, browser: 'firefox' })),
//   ...safari.map(r => ({ ...r, browser: 'safari' }))
// ];

let arr=[...chrome.map(r=>({...r,browser:'chrome'})),
...firefox.map(r=>({...r,browser:'firefox'})),
...safari.map(r=>({...r,browser:'safari'}))
]



console.log(arr);


