/*
Q41. FACEBOOK INTERVIEW:
Remove duplicates from: [1,2,2,3,4,4,5,1,6]
Use Set or filter().
Expected Output: [1,2,3,4,5,6]
*/

let arr= [1,2,2,3,4,4,5,1,6]
let near=new Array()
arr.filter((e,i)=>{
   if(!near.includes(e)) near.push(e)


})
console.log(near)

