/*
Q48. Deep clone array with nested objects:
let suite1 = [
  { name: 'Test1', data: { user: 'admin', pass: '123' } }
]
Create suite2 as true deep copy.
Modify suite2 without affecting suite1.
Show 3 different methods.
*/
let suite1 = [
  { name: 'Test1', data: { user: 'admin', pass: '123' } }
]

// let suite2=[...suite1]
// suite2.push({ocupation:'IT'})
// console.log(suite2)
// console.log(suite1)

// //2nd Option
// let suite2=suite1.slice()
// suite2.push({ocupation:'IT'})
// console.log(suite2)
// console.log(suite1)

//3rd Option
let suite2=Array.from(suite1)
suite2.push({ocupation:'IT'})
console.log(suite2)
console.log(suite1)