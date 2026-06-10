// Problem Statement given
// 1) write a  program using Typescript addion of elements in given array,  arr=[1, 2, 3, [4, 5], [[6, 7, 8]]]
// 2) Problem statement 2 
// const student1 = new Student(1, "English", 89);

// const student2 = new Student(2, "Hindi", 90);

// const student3 = new Student(3, "Maths", 45);

// console.log("Student1 result:", isExcellent(student1)); 

// console.log("Student2 result:", isExcellent(student2)); // "Excellent"

// console.log("Student3 result:", isExcellent(student3));

// Print Excellent if who got  90 or more than 90 using typescript programming

//1. write a  program using Typescript addion of elements in given array,  arr=[1, 2, 3, [4, 5], [[6, 7, 8]]]

let arr=[1, 2, 3, [4, 5], [[6, 7, 8]]]

let arr2=arr.flat(Infinity)
console.log(arr2)
console.log(arr2.reduce((a,b)=>a+b))

class Student 
{ 
    constructor(id, subject, marks) 
    {

    }

} 

function isExcellent(s) 
{ return s.marks >= 90 ? 'Excellent' : 'Not Excellent'; 

}


const student1 = new Student(1, "English", 89);

const student2 = new Student(2, "Hindi", 90);

const student3 = new Student(3, "Maths", 45);

console.log("Student1 result:", isExcellent(student1)); 

console.log("Student2 result:", isExcellent(student2)); // "Excellent"

console.log("Student3 result:", isExcellent(student3));