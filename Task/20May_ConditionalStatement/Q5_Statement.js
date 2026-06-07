/*
Question 5 — Login Lockout After Failed Attempts
Problem: Track failed login attempts. Lock the account after 3 failed attempts.
Sample Input/Output:
Input: attempts = 2
Output: 1 attempt left before lockout

Input: attempts = 3
Output: 🔒 Account Locked — Contact support

Input: attempts = 0
Output: Login successful
*/
let attempts=2


if(typeof attempts!=="number")
{     console.log("Given attempt response is not number.")
        return;
}

let response=attempts===3?"🔒 Account Locked — Contact support"
            :attempts===2?"1 attempt left before lockout"
            :attempts===0?"Login successful"
            :"Invalid"
console.log(response)