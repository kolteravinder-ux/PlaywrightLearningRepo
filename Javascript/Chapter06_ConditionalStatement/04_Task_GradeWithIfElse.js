/*
### Question 2 — Student Grade Calculator

Problem: Take marks (0–100) and print the grade based on these rules:

- 90 and above → A

- 80–89 → B

- 70–79 → C

- 60–69 → D

- Below 60 → Fail
*/

let a=10;


if(typeof a!== "number")
    {
        console.log("Given score is not number.")
        return;
    }

if(a>=0 && a<=100)
{
if(a>=0 && a<=59)
    console.log("For grade:",a,"- individual scored: F grade.")
else if(a>=60 && a<=69)
    console.log("For grade:",a,"- individual scored: D grade.")
else if(a>=70 && a<=79)
    console.log("For grade:",a,"- individual scored: C grade.")
else if(a>=80 && a<=89)
    console.log("For grade:",a,"- individual scored: B grade.")
else
    console.log("For grade:",a,"- individual scored: A grade.")

}
else
{
    console.log("Score can not be more than 100, kindly re calculate.")
}
