//declaration of array
let arr=[10,20,30];

//Array Constructor
let arr2= new Array(3); // new Memory allocation is happening
console.log(arr2) //[ <3 empty items> ]

let arr3=new Array(1,2,3);
console.log(arr3) //[ 1, 2, 3 ]

let arr4= Array.of(1,2,3,4,5)  // created through function 
console.log(arr4)
console.log(arr4[2])


let arr5= Array.from('Hello')  // creatd through function, will print
console.log(arr5)   // each character as an element 

let arr6 = Array.of(5);
console.log(arr6)