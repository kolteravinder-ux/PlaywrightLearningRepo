/*Question 3 — Bug Severity Classifier
Problem: Given a bug's impact score (1–10), classify the severity.
9–10 → Critical (block release)
7–8 → High
4–6 → Medium
1–3 → Low

Anything else → Invalid score
Sample Input/Output:

Input: 9
Output: Severity: Critical — Block release

Input: 5
Output: Severity: Medium


*/
let bugImpactScore=2.5


if(typeof bugImpactScore!=="number")
{     console.log("Given bug Impact Score is not number.")
        return;
}

let response=bugImpactScore>=9 && bugImpactScore<=10?"Critical (block release)"
            :bugImpactScore>=7 && bugImpactScore<=8?"High"
            :bugImpactScore>=4 && bugImpactScore<=6?"Medium"
            :bugImpactScore>=1 && bugImpactScore<=3?"Low"
            :"Invalid"
console.log(response)
