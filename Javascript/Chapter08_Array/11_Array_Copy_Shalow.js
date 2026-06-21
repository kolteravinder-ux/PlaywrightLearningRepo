//Shalow-Copy  =>

let original= [1,3,4,6]

//copy the Array
let copy1= [...original]
console.log(copy1)

let copy2= original.slice()
console.log(copy2)

let copy3= Array.from(original)
console.log(copy3)

let copy4=  original.concat()
console.log(copy4)

//Normal(Shalow) copy will not change the original
copy1.push(99)
console.log(copy1) //[ 1, 3, 4, 6, 99 ]
console.log(original) //[ 1, 3, 4, 6 ]



//Deep Copy- which will change the original if I add element in any array
original.push(91)
console.log(copy2) //[ 1, 3, 4, 6 ]
console.log(original) //[ 1, 3, 4, 6,91 ]

let arr= [1,3,4,6]
let co=arr
co.push(92)
console.log(co)
console.log(arr.length)