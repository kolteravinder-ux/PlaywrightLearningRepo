// // Question 1
// // Loop through [1, 2, 3, 4, 5] using forEach() and print each number multiplied by 2.

// let arr1=[1, 2, 3, 4, 5]

// arr1.forEach((num, index)=>{
//     console.log(`For index:${index} , element ${num} multiply by 2 is:`,num*2)
// })


// // Question 2
// // Use a for...of loop to find the sum of all numbers in [10, 20, 30, 40, 50].
// let arr2=["A", 20, 30, 40, 50]
// //console.log(arr2.reduce((a,b)=>a+b))
// let temp=0
// arr2.forEach((num, index)=>{
// if(typeof num==='number')
// {
//     temp=temp+num
// }
// else
// {
//     console.log(`Not adding as at index:${index} , element:${num} is not a number.`)
// }

// })

// console.log("Total of Array elements is:",temp)


// // Question 3
// // Use a traditional for loop to print only even numbers from [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

// let arr3=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr3.forEach((num, index)=>{

// if(typeof num==='number')
// {
//     if(num%2===0)
//     {
//         console.log(`Element:${num} at index:${index} ,is Even number.`)
//     }
    
// }
// else
// {
//     console.log(`Not adding as at index:${index} , element:${num} is not a number.`)
// }

// })

// // Question 4
// // Loop through an array and stop (break) when you find a number greater than 50.

// let arr4=[10, 20, 80, 40, 50]
// arr4.forEach((num, index)=>{
//  if(typeof num==='number')
//  {
// if(num>50)
// {
//     console.log(`Element:${num} at index:${index} ,is greater than 50, hence stopping the loop.`)
//     return
// }

// }

// })


