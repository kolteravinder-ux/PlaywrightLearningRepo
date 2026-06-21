//isArray()  which helps to know is given variable is array or not and returns Boolean value
let a1=[1,2,3]
console.log(Array.isArray(a1))  // true

let b="Test"
console.log(Array.isArray(b))   // false


//every()  - returns boolean - and helps to know if specific condition is matching 
let c=[60,70,80]
    console.log(c.every(i=>i>50))  // true // for every it verifies with each element if with all element conition is matching then it will give true

//some() - returns boolean- if any of 1 element is meeting condition then it will give true else false
 console.log(c.some(i=> i<50))  // false 
    
 console.log(c.some(i=> i<70))  // true 
