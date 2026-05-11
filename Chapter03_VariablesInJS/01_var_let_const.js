// var v=10
// let a=10
// const b=20


// Var features
//Redeclared
var browser="Chrome"
var browser="Firefox"
//Reassigned
browser="Safari"

// var test=["login","logout","signup"]
// for(var i=0;i<test.length;i++)
// {
//     console.log("Test Case:",test[i])
// }
// console.log("Var i is available out side of functionn which is declared in for loop, value of i:",i)



//FunctionScoped
// var a=10
// console.log("Global Scope:",a)  // Global Scope

// function greet()
// {
//     console.log("Hello World")
//     var a=20; // Local Scope
//     console.log("Local Scope:",a)
//     if(true){
//         var a=30; // Local Scope
//     console.log("Value of a inside function but inside true:",a)
//     }
//     console.log("Value of a inside function but outside true:",a)
// }
// greet()

// console.log("Value of a outside function:",a)




let b=10

b=20  // Re assigned

//let b=30  //SyntaxError: Identifier 'b' has already been declared

//blocked scoped
let teststatus="Completed"

if(true)
{
    let teststatus="Pending"
    console.log(teststatus)
    let status="Active"
}

console.log(teststatus)
//console.log(status)   //ReferenceError: status is not defined