// Loose Comparision - it verifies the  basis of value
/*
== algorithm branch on types:
-> String vs number ->coerce string to number
-> String vs String -> Byte compare , no coercion

*/



console.log(5=="5") //true

console.log(5==="5") //false

console.log(0=="") //true
console.log(0==="") //false

console.log(true == 1) //true
console.log(false == 0)  //true
console.log(true=="1") // true
console.log(true=="2") // false

console.log(0=="") //true
console.log(0=="0") //true
console.log("0"=="") //false

console.log(0==false) //true
console.log(0==null) //false
console.log(null==undefined) //true
console.log(null===undefined) //false

console.log("0"==null) /false