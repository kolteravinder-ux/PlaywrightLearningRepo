/*
write a java program that calculates and displays the letter grade for a given
number score: A:90-100, B:80-89, C:70-79, D:60-69, F:0-59
*/

let a="abc";


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