/*
Question 1 — HTTP Status Code Categorizer
Problem: Given an HTTP status code, print which category it belongs to.
200–299 → Success
300–399 → Redirection
400–499 → Client Error
500–599 → Server Error
Anything else → Invalid
Sample Input/Output:
Input: 404
Output: Client Error

Input: 200
Output: Success

*/
let httpStatusCode=404


if(typeof httpStatusCode!=="number")
{     console.log("Given Status code is not number.")
        return;
}

let response=httpStatusCode>=200 && httpStatusCode<=299?"Success"
            :httpStatusCode>=300 && httpStatusCode<=399?"Redirection"
            :httpStatusCode>=400 && httpStatusCode<=499?"Client Error"
            :httpStatusCode>=500 && httpStatusCode<=599?"Server Error"
            :"Invalid"
console.log(response)





