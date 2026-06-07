//Slicing & combining
let a1=[1,2,3,4,5]


// //Slice(Start , end)- basically it use for substring in array particular index is required
// console.log(a1.slice(1,3))  //[2,3]
// console.log(a1.slice(2,4))  //[3,4]


// //if we dont give end - then slice method will provide elements till end of array
// console.log(a1.slice(2))   //[3,4,5]
// console.log(a1.slice(-2))   //[4,5]
// console.log(a1.slice(-3))    //[3,4,5]
// console.log(a1.slice(0))    //[1,2,3,4,5]  // as it is starting from 0 and we have not provided the end then it will provide elements till end of array
// console.log(a1.slice(6))   // [] it will not print anything as this type of start index is not present in array



//Combining
let a=[1,2]
let b=[3,4]

// let c=a.concat(b)
// console.log(c)  //[1,2,3,4]
// let c1=a.concat(b,[5,6])
// console.log(c1)   //[1,2,3,4,5,6]

// spread (modern way) - concatination(...)
// let d=[...a,...b]
// console.log(d)  //[1,2,3,4]


//Join - it convert the array to string
let s= ["ABC", "BCD" , "EDF"]
let arrString = s.join(",")  // here in join , (Coma) will help us to segregate the element in array 
console.log(arrString)   //it will print like string "ABC,BCD,EDF"