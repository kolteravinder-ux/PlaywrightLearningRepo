//Given let stack = [], add 5 elements using push() and then remove the last 2 using pop().
let stack = []
console.log(stack)
stack.push(1,2,3,4,5)
console.log(stack)

//Use splice() to remove the 3rd element from [10, 20, 30, 40, 50].
let arr2=[10, 20, 30, 40, 50]
arr2.splice(2,1) 
console.log(arr2)


//Use splice() to insert "X" and "Y" between index 1 and 2 in ['a', 'b', 'c'] without deleting anything.
let arr3=['a', 'b', 'c']
arr3.splice(2,0,'X','Y')
console.log(arr3)

//Extract elements from index 2 to 4 (inclusive) from [1, 2, 3, 4, 5, 6] using slice().
let arr4=[1, 2, 3, 4, 5, 6]
let sub=arr4.slice(2,5)
console.log(sub)

// What's the difference between splice() and slice()? Demonstrate with code.





