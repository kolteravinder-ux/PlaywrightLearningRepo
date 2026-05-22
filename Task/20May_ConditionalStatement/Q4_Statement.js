/*
Question 4 — Build Health Reporter
Problem: Given the percentage of test cases passed in a CI build, report build health.
100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)
Sample Input/Output:
Input: 95
Output: 🟡 Stable — Investigate failures
Input: 65
Output: 🔴 Broken Build — Block deployment
*/

let testCasePass=101


if(typeof testCasePass!=="number")
{     console.log("Given test Case Pass is not number.")
        return;
}

if(testCasePass <=100)
{
let response=testCasePass===100?"Green Build"
            :testCasePass>=90 && testCasePass<=99?"🟡 Stable(investigate failures)"
            :testCasePass>=70 && testCasePass<90?"Unstable"
            :"🔴 Broken Build — Block deployment"
            
console.log(response)
}
else{
     console.log("Given test Case Pass percentage cannot be more than 100.")
      
}