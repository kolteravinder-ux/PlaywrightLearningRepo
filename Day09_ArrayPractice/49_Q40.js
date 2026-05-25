/*
Q40. Compare for loop vs forEach:
Which one can you break early? Demonstrate with code.
Array: [1,2,3,4,5]
Task: Stop when you find a number > 3
*/
let arr =[1,2,3,4,5]

for(let i=0;i<arr.length;i++)
{
if(arr[i] >3 )
{
    console.log('Traditional for loop: found element greater than 3 at index:',i)
    break
}
}
console.log('------------------------------------------------')
arr.forEach((e,ind)=>{

if(e >3 )
{
    console.log('For each loop: found element greater than 3 at index:',ind)
    return
}

})


