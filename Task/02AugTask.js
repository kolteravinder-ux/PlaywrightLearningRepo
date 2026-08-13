//Find and print all duplicate elements in an array.

const arr=[6,1,2,3,2,4,1]
let arrcnt = arr.length
console.log(arrcnt)

arr.forEach((val,index) => {
       if(arr.indexOf(val) !== index){
        console.log(`Duplicate element found: ${val}`)
    }

})






