/*
Q18. REAL INTERVIEW QUESTION (Amazon):
Given array: [1, 2, 3, 4, 5, 2, 3, 2]
Find ALL indices where value 2 appears.
Write a function findAllIndices(arr, value).
Expected Output: [1, 5, 7]
*/
let arr= [1, 2, 3, 4, 5, 2, 3, 2]
let ArrIndex=findAllIndices(arr, 2)
console.log(ArrIndex)


function findAllIndices( arr, value){
    let newArr= new Array()
arr.forEach((x,index)=>{

    if(x===value)
        newArr.push(index)


})

return newArr
}





