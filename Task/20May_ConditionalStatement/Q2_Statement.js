
/*
Question 2 — Test Case Pass/Fail Verdict

Problem: Compare actual result with expected result and print test verdict.

Sample Input/Output:

expected = "Login Successful"
actual   = "Login Successful"
Output: ✅ Test Passed

expected = "Login Successful"
actual   = "Invalid Credentials"
Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials

*/
let Expected=404
let Actual=321

let response=Expected===Actual? `✅ Test Passed` : `❌ Test Failed — Expected: ${Expected}, Actual:  ${Actual}`
console.log(response)