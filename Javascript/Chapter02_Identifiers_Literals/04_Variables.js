var a=10;
console.log("Varaible a value:",a)
//Reassiging a value to var
a=20
console.log("Varaible a value:",a)
// re declaring same varaible
var a=30
console.log("Varaible a value:",a)

// Functional Scope
var a=40
console.log("Outside the function variable value:",a)

if(true)
{
    var a=50
    console.log("In the function scope redeclaring or reassigning value of variable:",a)

}
console.log("Varaible a value outside the function scope as variable declared in function:",a)



// let b=10;
// console.log("Varaible b value:",b)
