/*
Write a function greet(name, callback) that:
- Takes a name and a callback function
- Calls the callback with a greeting message

Expected:
greet("Ravi", msg => console.log(msg))
Output: "Hello, Ravi!"
*/
// function greet(name, callback){
//     msg=`Hello, ${name}!`
//     callback(msg)
// }

// greet("Ravi", msg => console.log(msg))

// greet("Ravi", ()=>{
// console.log(msg)
// }
// )


/*
2.Write a function calculate(a, b, operation) that:
- Takes two numbers and an operation callback
- Returns the result of the operation

Expected:
calculate(10, 5, (a,b) => a + b)  // 15
calculate(10, 5, (a,b) => a * b)  // 50
calculate(10, 5, (a,b) => a - b)  // 5
*/
// function calculate(a, b, operation)
// {
//    operation(a,b)
// }

// calculate(10, 5, (a,b) => console.log(a + b))  // 15
// calculate(10, 5, (a,b) => console.log(a * b))  // 50
// calculate(10, 5, (a,b) => console.log(a - b))  // 5

/*
Write a function processArray(arr, callback) that:
- Takes an array and a callback
- Applies callback to each element
- Returns new array with results

Expected:
processArray([1,2,3,4,5], n => n * 2)    // [2,4,6,8,10]
processArray([1,2,3,4,5], n => n > 3)    // [false,false,false,true,true]
*/
// function processArray(arr, callback){
// let result = [];
//     for (let item of arr) {
//         result.push(callback(item));
//     }
//     return result;
// }
// console.log(processArray([1,2,3,4,5], n => n * 2))   // [2,4,6,8,10]
// console.log(processArray([1,2,3,4,5], n => n > 3)) // [false,false,false,true,true]


/*
Write a function filterItems(arr, callback) that:
- Returns only items where callback returns true

Expected:
filterItems([1,2,3,4,5,6], n => n % 2 === 0)  // [2, 4, 6]
filterItems(["pass","fail","pass","skip"], s => s === "pass")  // ["pass","pass"]
*/

// function filterItems(arr, callback){
// let res=new Array();

// for(let item of arr){
//     if(callback(item)===true)
//     res.push(item)
// }
// return res
// }

// console.log(filterItems([1,2,3,4,5,6], n => n % 2 === 0))  // [2, 4, 6]
// console.log(filterItems(["pass","fail","pass","skip"], s => s === "pass"))  // ["pass","pass"]

/*
Write code that:
- Prints "Starting..."
- After 2 seconds prints "Task Done!"
- After task done prints "All finished!"

Understand the execution order.
*/

// console.log("Starting...")

// setTimeout(()=>{
//     console.log("Task Done!")
// },2000)

// console.log("All Finished...")
// // Output ORDER:
// // "Starting..."         ← synchronous (immediate)
// // "All finished!"       ← synchronous (immediate)
// // "Task Done!"          ← after 2 seconds (async!)

// // Why? setTimeout is non-blocking!
// // JavaScript doesn't wait — it moves on!

/*
Write three functions:
- step1(callback) → passes "Step 1 done" to callback
- step2(data, callback) → passes data + " → Step 2 done" to callback
- step3(data, callback) → passes data + " → Step 3 done" to callback

Chain them together.
Expected Output: "Step 1 done → Step 2 done → Step 3 done"
*/

// function step1(callback){
// console.log("Running Step 1...")
//     callback("Step 1 done")
// }

// function step2(data, callback){
// console.log("Running Step 2...")
//     callback(data+"->Step 2 done")
// }
// function step3(data, callback)
// {
//     console.log("Running Step 3...")
//     callback(data+"->Step 3 done")
// }

// step1(res1=>{
//     step2(res1,res2=>{
//         step3(res2,res3=>{
//             console.log(res3)
//         })
//     })
// })

/*
Write a function divideNumbers(a, b, callback) that:
- If b is 0: calls callback(new Error("Cannot divide by zero"), null)
- Otherwise: calls callback(null, result)

This is the standard Node.js callback pattern!
*/
// function divideNumbers(a, b, callback){
//     if(b===0)
//     {
//         callback(new Error("Cannot divide by zero"), null)
//     }
//     else{
//         result =a/b
//         callback(null, result)
//     }
// }

// divideNumbers(6,0,(err,res)=>{
//     if(err)
//         console.log("Error:", err.message);
//     else
//         console.log("Result:", result);
// })

/*
Implement your own myForEach() function
that works exactly like Array.prototype.forEach()

Expected:
myForEach([1,2,3], (item, index) => {
    console.log(`${index}: ${item}`)
})
Output:
0: 1
1: 2
2: 3
*/

// function myForEach(arr, callback){
//   arr.forEach((element , index)=> {
//     callback(element, index)
//   });
// }

// myForEach([1,2,3], (item, index) => {
//     console.log(`${index}: ${item}`)
// })


/*
Implement your own myMap() that works like Array.map()

Expected:
myMap([1,2,3,4,5], n => n * n)
Output: [1, 4, 9, 16, 25]
*/

function myMap(arr, callback){
let res=[]
for(let item of arr)
{
 res.push(callback(item))
}
return res
}

console.log(myMap([1,2,3,4,5], n => n * n))
