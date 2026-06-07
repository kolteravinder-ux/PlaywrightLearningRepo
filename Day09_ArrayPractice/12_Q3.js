// Q3. Create an array with 10 elements and access:
//    a) First element
//    b) Last element
//    c) Middle element
// Write the code.

let arr=[1,2,3,4,5,6,7,8,9,10]

console.log(arr.at(0))
console.log(arr[arr.length-1])
console.log(arr[Math.floor(arr.length/2)])

// Q: "What about finding TWO middle elements (even length)?"
javascriptlet arr = [10, 20, 30, 40, 50, 60];
// For even length, you might want both middle elements

let mid1 = Math.floor(arr.length / 2) - 1;  // 2
let mid2 = Math.floor(arr.length / 2);      // 3

console.log(arr[mid1], arr[mid2]);  // 30, 40
