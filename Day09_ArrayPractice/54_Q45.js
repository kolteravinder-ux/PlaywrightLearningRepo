/*
Q45. Chunk array into smaller arrays:
Input: [1,2,3,4,5,6,7,8], chunkSize: 3
Output: [[1,2,3],[4,5,6],[7,8]]
Write a function.
*/
let Input= [1,2,3,4,5,6,7,8]
let chunksize=3
let arr=new Array()
for(let i=0;i<Input.length;i+=3)
{
arr.push(Input.slice(i,i+3))
}
console.log(arr)

