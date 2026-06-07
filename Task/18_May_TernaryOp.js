/*
// 1.Maximum number between two numbers, okay, by using the ternary operator 
// 2. And maximum between the three numbers also by using turnery over 
 */
// 1.Maximum number between two numbers, okay, by using the ternary operator 
let a=90
let b=50

if(typeof a==="number" && typeof b==="number")
{
const MAX_NUM_OF_TWO_NUM= a>b?a:b
console.log(`Maximum number between two numbers is :${MAX_NUM_OF_TWO_NUM}`)
}
else
{
    console.log("Value given to two variables it not a number")
}


// 2. And maximum between the three numbers also by using turnery over 
let a=20
let b=30
let c=15

if(typeof a==="number" && typeof b==="number" && typeof c==="number")
{
const MAX_NUM_OF_TWO_NUM= a>b && a>c?a
                          :b>a &&  b>c?b:c
console.log(`Maximum number between three numbers is :${MAX_NUM_OF_TWO_NUM}`)
}
else
{
    console.log("Value given out of 3 variables is not a number")
}
