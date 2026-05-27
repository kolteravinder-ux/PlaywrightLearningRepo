let arr=[1,2,3,4,5,2]

// indexOf- returns fist index of element if found in array else -1
console.log(arr.indexOf(4)) //3
console.log(arr.indexOf(6))  //-1

console.log(arr.lastIndexOf(2)) //5

console.log(arr.includes(2)) //true
console.log(arr.includes(6)) //false

let a =[1,20,30,50]

console.log(a.find(x => x>20)) //30

console.log(a.findIndex(x => x>20)) //2
console.log(a.findLast(x => x>20))   //50
console.log(a.findLastIndex(x => x>20)) //3
