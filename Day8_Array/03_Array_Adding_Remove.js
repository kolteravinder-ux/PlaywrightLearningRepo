let arr=[1,2,3,4,5]
console.log(arr)

//add an element
arr.push(6)
//arr.push(5)
console.log(arr)

//Remove an element
arr.pop();   // remove the last element
console.log(arr)    

// Add to begning 
arr.unshift(0)  // adding the element at begning 
console.log(arr)

// remove the first element
arr.shift() // remove the first element
console.log(arr)

// specfic element removing
arr.splice(2,1)  // remove 2nd index from array, and need to remove 1 element only
console.log(arr)      // remove 1 item at index 2

//adding element at specific location
arr.splice(2,0,99) // add 99 at index 2 , and 0 denotes removing nothing
console.log(arr)

// If we want to replace an element from index
arr.splice(1, 1,100 ,95,93) // it will replace element from index 1 (1st parameter)
//1- index, 2- replace or remove, 100& 95 - add the element
console.log(arr)

