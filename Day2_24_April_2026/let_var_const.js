/*
*
*   let, var, const
*/

// var
var name = "John";
console.log(name);  
name="Ravi";
console.log(name)

function varTest() {
    var x = 1;
    if (true) {
        //var x = 2;
        console.log(x);
    }
}
varTest();

console.log("------------------");
// let

let a=10;
console.log(a);
// let a=20; // SyntaxError: Identifier 'a' has already been declared
a=25;
console.log(a)
function letTest() {   
    let a = 20;
    console.log(a);
        if (true) { 
            let a=30;
            console.log(a);

            }
            console.log(a);


}
letTest();

console.log("------------------");

//Const
const PI = 3.14;
console.log(PI);
// PI = 3.14159; // TypeError: Assignment to constant variable.
console.log("------------------");

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}


console.log("print with less data:",PI)