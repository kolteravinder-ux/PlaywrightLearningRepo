/*As an SDET, you receive an API response status code and need to classify it. Write a JavaScript 
program using a switch statement that takes an HTTP status code stored in a variable and prints 
the category and a QA-friendly message.

- 200 → "PASS - OK: Request successful"
- 201 → "PASS - Created: Resource created successfully"
- 301 → "WARNING - Moved Permanently: URL has changed"
- 400 → "FAIL - Bad Request: Check request payload"
- 401 → "FAIL - Unauthorized: Check auth token"
- 403 → "FAIL - Forbidden: Insufficient permissions"
- 404 → "FAIL - Not Found: Check endpoint URL"
- 500 → "FAIL - Internal Server Error: Backend issue"
- Any other → "UNKNOWN - Unhandled status code"

Input
statusCode = 401
Output
Status Code : 401 Result : FAIL - Unauthorized: Check auth token
*/

// let statusCode = 401;

// switch (statusCode) {
//     case 200:
//         console.log(`Status Code : ${statusCode} Result : PASS - OK: Request successful`);

//     case 201:
//         console.log(`Status Code : ${statusCode} Result : PASS - Created: Resource created successfully`);
//         break;
//     case 301:
//         console.log(`Status Code : ${statusCode} Result : WARNING - Moved Permanently: URL has changed`);
//         break;
//     case 400:
//         console.log(`Status Code : ${statusCode} Result : FAIL - Bad Request: Check request payload`);
//         break;
//     case 401:
//         console.log(`Status Code : ${statusCode} Result : FAIL - Unauthorized: Check auth token`);
//         break;
//     case 403:
//         console.log(`Status Code : ${statusCode} Result : FAIL - Forbidden: Insufficient permissions`);
//         break;                  
//     case 404:               
//        console.log(`Status Code : ${statusCode} Result : FAIL - Not Found: Check endpoint URL`);
//         break;  
//     case 500:
//         console.log(`Status Code : ${statusCode} Result : FAIL - Internal Server Error: Backend issue`);
//         break;
//     default:
//         console.log(`Status Code : ${statusCode} Result : UNKNOWN - Unhandled status code`);
// }











/*
2. After a test suite runs, you receive an array of test results 
(strings: "pass", "fail", "skip"). Write a JavaScript program using a for loop that counts 
how many tests passed, failed, and were skipped. 
Print a test report with total tests, counts, pass rate percentage, and a verdict 
(all passed → ready for release, ≤2 failures → review, >2 failures → block release).
Input
testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
Output
Total Tests : 8 Passed: 5 Failed: 2 Skipped: 1 Pass Rate: 62.50% VERDICT: Minor failures. 
Review before release.
*/

// let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]

// let totalTests = testResults.length;
// let passed = 0;
// let failed = 0;
// let skipped = 0;

// for (let i = 0; i < testResults.length; i++) {
//     if (testResults[i] === "pass") {
//         passed++;
//     } else if (testResults[i] === "fail") {
//         failed++;
//     } else if (testResults[i] === "skip") {
//         skipped++;
//     }
// }
// let passRate = (passed / totalTests) * 100; 
// console.log(`Total Tests : ${totalTests} Passed: ${passed} Failed: ${failed} Skipped: ${skipped} Pass Rate: ${passRate.toFixed(2)}%`);
// if (failed === 0) {
//     console.log("VERDICT: All tests passed. Ready for release.");
// }
// else if (failed <= 2) {
//     console.log("VERDICT: Minor failures. Review before release.");
// }                                                                                       
// else {
//     console.log("VERDICT: Major failures. Block release.");             
// }







/*


3. In automation testing, API calls sometimes fail due to network issues. 
Write a JavaScript program that simulates retrying a failed API call using a do...while loop. 
The program should retry a maximum of 5 times. Simulate random success/failure using Math.random() 
(40% chance of success: randomValue > 0.6). Log each attempt and print the final result.
Input
MAX_ATTEMPTS = 5
Output
Attempt 1: ❌ FAILED (Timeout/Error) Attempt 
2: ✅ SUCCESS (Response 200 OK) API call PASSED after 2 attempt(s).
*/
// const MAX_ATTEMPTS = 5;
// let attempt = 0;
// let success = false;
// do {
//     attempt++;
//     const randomValue = Math.random();
//     if (randomValue > 0.6) {
//         console.log(`Attempt ${attempt}: ✅ SUCCESS (Response 200 OK)`);
//         success = true;
//     } else {
//         console.log(`Attempt ${attempt}: ❌ FAILED (Timeout/Error)`);
//     }       
// } while (!success && attempt < MAX_ATTEMPTS);   
// if (success) {  
//     console.log(`API call PASSED after ${attempt} attempt(s).`);
// } else {
//     console.log(`API call FAILED after ${MAX_ATTEMPTS} attempts.`);
// }

/*

4. In UI automation (Cypress/Playwright), you often need to validate element states before 
interacting with them. Write a JavaScript program that checks an element's 
properties (isPresent, isDisplayed, isEnabled) and prints the appropriate 
action a QA engineer should take. Use strict equality (===), 
logical operators (&&, ||), and the ternary operator for severity level.

States: READY (all true), DISABLED (present+displayed but not enabled), 
HIDDEN (present but not displayed), NOT FOUND (not present).
Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).

Input
isPresent = true, isDisplayed = true, isEnabled = false
Output
Status: DISABLED Severity: WARNING Action: Element is visible but disabled. 
Wait for enable state or check preconditions.
*/
// let isPresent = true, isDisplayed = true, isEnabled = false
// let status = '';
// if (isPresent === true && isDisplayed === true && isEnabled === true) {
//     status = 'READY';
// } else if (isPresent === true && isDisplayed === true && isEnabled === false) { 
//     status = 'DISABLED';
// } else if (isPresent === true && isDisplayed === false) {
//     status = 'HIDDEN';
// } else if (isPresent === false) {
//     status = 'NOT FOUND';   
// }
// let severity = (isPresent === false) ? 'CRITICAL' : ((isDisplayed === false || isEnabled === false) ? 'WARNING' : 'OK');
// let action = '';
// if (severity === 'CRITICAL') {
//     action = 'Element not found. Check locator or page load.';
// } else if (severity === 'WARNING') {
//     action = 'Element is visible but disabled. Wait for enable state or check preconditions.';
// } else if (severity === 'OK') {
//     action = 'Element is ready for interaction.';
// }   
// console.log(`Status: ${status} Severity: ${severity} Action: ${action}`);






/*

5. As an SDET, you frequently need to generate test data for form testing. 
Write a JavaScript program that generates test user data using a for loop.
 Each user should have a unique ID (USR-0001 format), name, email, and role 
 (cycling through: admin, editor, viewer, tester, manager). 
 Every 3rd user should be inactive (edge case testing). 
 Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).

Input
Generate 8 users
Output
USR-0001 | TestUser_1 | testuser1@testingacademy.com | admin | ACTIVE 
USR-0002 | TestUser_2 | testuser2@testingacademy.com | editor | ACTIVE 
USR-0003 | TestUser_3 | testuser3@testingacademy.com | viewer | INACTIVE
*/
// const ROLES = ['admin', 'editor', 'viewer', 'tester', 'manager'];
// const TOTAL_USERS = 8;
// var userCount = 0; // global counter for unique ID
// for (let i = 1; i <= TOTAL_USERS; i++) {
//     userCount++;
//     const userId = `USR-${String(userCount).padStart(4, '0')}`;
//     const name = `TestUser_${i}`;
//     const email = `TestUser${i}@testingacademy.com`;
//     const role = ROLES[(i - 1) % ROLES.length];
//     const isActive = (i % 3 !== 0); // Every 3rd user is inactive

//     console.log(`${userId} | ${name} | ${email} | ${role} | ${isActive ? 'ACTIVE' : 'INACTIVE'}`);
// }   










/*
6.As a QA engineer, classify bugs based on two factors: 
frequency ("always", "often", "rarely") and 
impact ("blocker", "major", "minor"). 
Write a JavaScript program using nested if-else that prints the bug severity level.

Classification Matrix:
- always + blocker → P0 | always + major → P1 | always + minor → P2
- often + blocker → P1 | often + major → P2 | often + minor → P3
- rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4
Input
frequency = "always", impact = "blocker"
Output
Bug Title: Checkout page crashes on applying coupon Frequency: always Impact: blocker Severity: P0 - Critical: Stop release immediately
*/
// let frequency = "always", impact = "blocker"
// let severity = '';
// if (frequency === "always") {
//     if (impact === "blocker") {
//         severity = "P0 - Critical: Stop release immediately";
//     } else if (impact === "major") {
//         severity = "P1 - High: Fix before release";
//     } else if (impact === "minor") {
//         severity = "P2 - Medium: Schedule for next release";
//     }
// } else if (frequency === "often") {
//     if (impact === "blocker") {
//         severity = "P1 - High: Fix before release";
//     } else if (impact === "major") {
//         severity = "P2 - Medium: Schedule for next release";
//     } else if (impact === "minor") {
//         severity = "P3 - Low: Address in future";
//     }
// } else if (frequency === "rarely") {    
//     if (impact === "blocker") {
//         severity = "P2 - Medium: Schedule for next release";
//     } else if (impact === "major") {
//         severity = "P3 - Low: Address in future";
//     } else if (impact === "minor") {
//         severity = "P4 - Trivial: No immediate action";
//     }
// }   
// console.log(`Bug Title: Checkout page crashes on applying coupon Frequency: ${frequency} Impact: ${impact} Severity: ${severity}`);
                                

    




/*
7. As a performance tester, you collect API response times in milliseconds. 
Write a JavaScript program using a while loop that analyzes an array of response times and
 prints a performance report with min, max, average, and how many responses breached 
 the SLA threshold (> 500ms). Use comparison operators for min/max tracking.
Input
responseTimes = [120, 230, 450, 510, 180, 620], SLA_LIMIT = 500
Output
Total Requests: 6 Min Response: 120ms Max Response: 620ms SLA Breaches: 2 (33.33%) Overall Status: ❌ SLA VIOLATED
*/
// let responseTimes = [120, 230, 450, 510, 180, 620]
// let SLA_LIMIT = 500
// let totalRequests = responseTimes.length;
// let totalTime = 0;
// let breaches = 0;
// let i = 0;

// responseTimes.sort((a, b) => a - b); // Sort the array to find min and max easily
// let minResponse = responseTimes[0];
// let maxResponse = responseTimes[responseTimes.length - 1];

// console.log(minResponse, maxResponse)


// while (i < responseTimes.length) {
//     let time = responseTimes[i];
    
//     totalTime += time;
//     if (time > SLA_LIMIT) {
//         breaches++;
//     }
//     i++;
// }
// let averageResponse = totalTime / totalRequests;
// let breachPercentage = (breaches / totalRequests) * 100;
// console.log(`Total Requests: ${totalRequests} Min Response: ${minResponse}ms Max Response: ${maxResponse}ms SLA Breaches: ${breaches} (${breachPercentage.toFixed(2)}%) Overall Status: ${breaches > 0 ? '❌ SLA VIOLATED' : '✅ SLA MET'}`);








/*
8. In CI/CD pipelines, tests run against different environments. 
Write a JavaScript program using a switch statement that takes an environment name stored in a variable 
and prints the base URL, API key pattern, and timeout. Use const for fixed values and 
let for the assembled config.

Environments: dev, staging, qa, production/prod. 
Each has different base URL, API key prefix, timeout, and description.

Input
envName = "staging"
Output
Environment: STAGING Base URL: https://staging-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Staging - Pre-production mirror
*/
// let envName = "staging"
// const ENV_CONFIG = {
//     dev: {
//         baseUrl: "https://dev-api.testingacademy.com",
//         apiKeyPrefix: "dev_key_xxxx-xxxx",
//         timeout: 5000,
//         description: "Development - For active development and testing"
//     },
//     staging: {
//         baseUrl: "https://staging-api.testingacademy.com",
//         apiKeyPrefix: "stg_key_xxxx-xxxx",
//         timeout: 8000,
//         description: "Staging - Pre-production mirror"
//     },
//     qa: {
//         baseUrl: "https://qa-api.testingacademy.com",
//         apiKeyPrefix: "qa_key_xxxx-xxxx",
//         timeout: 6000,
//         description: "Quality Assurance - For comprehensive testing"
//     },
//     production: {
//         baseUrl: "https://prod-api.testingacademy.com",
//         apiKeyPrefix: "prod_key_xxxx-xxxx",
//         timeout: 10000,
//         description: "Production - Live environment"
//     }
// };
// let config;
// switch (envName) {
//     case "dev":
//         config = ENV_CONFIG.dev;
//         break;
//     case "staging":
//         config = ENV_CONFIG.staging;
//         break;
//     case "qa":
//         config = ENV_CONFIG.qa;
//         break;
//     case "production":
//     case "prod":
//         config = ENV_CONFIG.production;
//         break;
//     default:
//         console.log(`Unknown environment: ${envName}`);
//         process.exit(1);
// }
// console.log(`Environment: ${envName.toUpperCase()} Base URL: ${config.baseUrl} API Key: ${config.apiKeyPrefix} Timeout: ${config.timeout}ms Description: ${config.description}`);




/*
9. Write a JavaScript program that simulates a login system with brute-force detection. 
The system should lock the account after 3 consecutive failed attempts. Use a do...while loop to 
process login attempts from an array. Demonstrate var (global counter), 
let (loop variables), and const (credentials and threshold). 
Validate using strict equality (===) and logical operators (&&).

Input
Valid: admin@testingacademy.com / Test@1234 Attempts: [wrong, wrong, wrong, correct]
Output
Attempt 1: ❌ FAILED - Strike 1/3 Attempt 2: ❌ FAILED - Strike 2/3 Attempt 3: ❌ FAILED - Strike 3/3 🚨 ACCOUNT LOCKED Attempt 4: 🔒 ACCOUNT LOCKED - Rejected
*/
// let Valid = "admin@testingacademy.com";
// let Password = "Test@1234";
// let Attempts = ["wrong", "wrong", "wrong", "correct"];

// const MAX_ATTEMPTS = 3;
// var strikeCount = 0;    
// let i = 0;
// do {
//     let attempt = Attempts[i];
//     if (attempt === "correct") {
//         console.log(`Attempt ${i + 1}: ✅ SUCCESS - Logged in`);
//         strikeCount = 0; // reset strike count on success
//     } else {
//         strikeCount++;
//         console.log(`Attempt ${i + 1}: ❌ FAILED - Strike ${strikeCount}/${MAX_ATTEMPTS}`); 
//         if (strikeCount >= MAX_ATTEMPTS) {
//             console.log(`🚨 ACCOUNT LOCKED`);
//         }
//     }
//     i++;
// } while (i < Attempts.length);
// if (strikeCount >= MAX_ATTEMPTS) {
//     console.log(`Attempt ${i}: 🔒 ACCOUNT LOCKED - Rejected`);
// }



/*
10. Build a mini test suite runner that executes test cases and generates a summary report. 
This question combines ALL topics: var/let/const, if-else, switch, for loop, while loop, do...while, 
operators (===, !==, &&, ||, ??, ternary), typeof checks, and identifiers.

Each test case has a name, expected value, actual value, 
and comparison type (strictEqual, looseEqual, typeCheck, truthy, lessThan). 
Run all tests, track pass/fail/error counts, find consecutive passes from start (while loop), 
find first failure (do...while), and print a comprehensive report.
Input
{ name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" }
Output
✅ TC-01: Status code is 200 → PASS (200 === 200) ... Pass Rate: 80.00% Overall: ❌ FAILED
*/
let status ={ name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual"}


