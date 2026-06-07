/*
Q21. Convert all test names to uppercase:
['login test', 'signup test', 'checkout test']
Use map() method.
Expected Output: ['LOGIN TEST', 'SIGNUP TEST', 'CHECKOUT TEST']
*/

let ele= ['login test', 'signup test', 'checkout test']

let ans=ele.map(x=>x.toUpperCase())

console.log(ans)