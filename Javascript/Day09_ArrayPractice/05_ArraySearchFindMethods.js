// let numbers = [5, 12, 8, 130, 44];

// // indexOf() — simple search
// numbers.indexOf(8);  // 2
// numbers.indexOf(99); // -1 (not found)

// // includes() — existence check
// numbers.includes(12);  // true
// numbers.includes(99);  // false

// // find() — with condition
// let result = numbers.find(num => num > 10);
// console.log(result);  // 12 (first element > 10)

// // findIndex() — get index with condition
// let index = numbers.findIndex(num => num > 100);
// console.log(index);  // 3 (index of 130)

// // Find in array of objects
// let users = [
//   { id: 1, name: "Ravi" },
//   { id: 2, name: "Priya" },
//   { id: 3, name: "Amit" }
// ];

// let user = users.find(u => u.id === 2);
// console.log(user);  // { id: 2, name: "Priya" }

// Question 1
// Given [10, 20, 30, 20, 10], find both the first and last index of 20.

// let num1 = [10, 20, 30, 20, 10]
// console.log(num1.indexOf(20))  //1
// console.log(num1.lastIndexOf(20))    //3

// Check if the array [1, 2, 3, 4, 5] includes the number 3. Then check for 10.

// let num2 = [1, 2, 3, 4, 5]
// console.log(num2.includes(3)) // true
// console.log(num2.includes(10))   //false

// Question 3
// // Find the first number greater than 50 in [10, 25, 80, 35, 100] using find().
// let num3 = [10, 25, 80, 35, 100]
// console.log(num3.find(num=> num>50)) //80
// let arrFilter=num3.filter(x => x>50) 
// console.log(arrFilter)  //[ 80, 100 ]
 
// Question 4
// Given an array of users with {id, name, age}, find the user with age > 25 using find().
// let users = [
//   { id: 1, name: "Ravi", age:20 },
//   { id: 2, name: "Priya" , age:15},
//   { id: 3, name: "Amit", age:40 }
// ];

// console.log(users.find(u=>u.age >25))

