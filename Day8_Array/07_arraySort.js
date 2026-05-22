let a=[10,20,25,5,30]
console.log(a.sort())

// .sort() will sort the array considering first alphabet only and same for Integer as well
let aString=["Banana", "Cat", "Apple"]
console.log(aString.sort())

// But if we want to do the ascending sorting then
let aintAsc=[10,20,25,5,30]
console.log(aintAsc.sort((a,b)=> a-b))

// But if we want to do the descending sorting then
let aintDec=[10,20,25,5,30]
console.log(aintDec.sort((a,b)=> b-a))


