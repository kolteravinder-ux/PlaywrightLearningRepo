/*
1. Given a string , Reverse it and print true if they are same.
  ex. Madam is palindrome, pramod is not


2. Java Anagrams

*/

//1. Given a string , Reverse it and print true if they are same.
  //ex. Madam is palindrome, pramod is not

let str="Pramod"
let str2=str.toLowerCase()
let tempstr=""
for(let i=str2.length-1;i>=0;i--)
{
  //console.log(str2[i])
  tempstr= tempstr.concat(str2[i])
}
console.log(tempstr)
console.log(str)

if(tempstr===str2)
console.log('Given String is palindrome')
else
  console.log('String is not palindrome.')
