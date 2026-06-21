//Create an array of your 5 favorite movies using array literal syntax.
let arr=["Karan Arjun", "Hit", "Run", "3 Idiot","Dhamal"]


//Use Array.from() to create an array of numbers from 10 to 20.
let arr2 = Array.from({ length: 11 }, (_, i) => i + 10)
console.log(arr2)

// // Print the index-to-value mapping explicitly
// arr2.forEach((value, index) => {
//   console.log(`i=${index} -> ${index} + 10 = ${value}`);
// });

//Create an empty array and then add 3 elements to it using different methods.
let arr3= new Array(3)
//arr3=[1,2,3]
console.log(arr3)

let arr4=new Array(1,2,3)
console.log(arr4)

let arr5= new Array()
arr5=[1,2,3,4]
console.log(arr5)

let arr6= Array.of(5)
console.log(arr6)


//Convert the string "JavaScript" into an array of characters.
let arr7=Array.from("JavaScript")
console.log(arr7)

//What's the difference between new Array(5) and Array.of(5)? Create both and log them.
let arr8= new Array(5)
let arr9= Array.of(5)
console.log(arr8)
console.log(arr9)