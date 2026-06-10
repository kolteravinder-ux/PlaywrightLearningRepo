// *****
// ****
// ***
// **
// *
//Print reverse

let row=5
for(let i=row;i>0;i--){
for(let j=i;j>0;j--){
    process.stdout.write("* ")
    }
console.log("")
}

//Question 2
//   *
//  ***
// ***** 

let row=3
for(let i=1;i<=row;i++){
for(let j=1;j<=row-i;j++)
    {        
    process.stdout.write(" ")
    }

for (let k = 1; k <= (2 * i - 1); k++) {
                process.stdout.write("*")
            }

console.log("")
}

