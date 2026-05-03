/*
write a javascript program
if 3 sides are equal= it is Triangle;
If 2 sides are equal = it is Isoceles
if none of the sides are equal= it is Scalene
*/

let a=10, b=1, c=10;

if(typeof a!=="number" || typeof b!=="number"|| typeof c!=="number")
{   
    console.log("Given sides is not in number.")
    return;

}

if (a === b && b === c) {
  console.log("Equilateral");
} else if ((a === b && a !== c) || (b === c && b !== a) || (a === c && a !== b)) {
  console.log("Isosceles");
} else {
  console.log("Scalene");
}