let arr=["Ravi", "John", "Pari"]

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}
console.log("-----------------------------")
for(let print of arr)
        {
            console.log(print)
        }
console.log("-----------------------------")

arr.forEach((val,index) => {
    console.log(`At index ${index}: Value is ${val}`)

})

    

console.log("-----------------------------")

for(let[i,val] of arr.entries()){
    console.log(`At index ${i}: Value is ${val}`)
}