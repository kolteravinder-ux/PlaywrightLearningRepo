//console.log(greet)    // Reference error TDZ mode
let greet="Hello"
console.log(greet)

if (true)
{
console.log(greet)  // Reference error TDZ mode

let greet="green"
console.log(greet)
}