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



// Write a program that prints numbers from 1 to 100. However, for multiples of 3, 
// print "Fizz" instead of the number, and 
// for multiples of 5, print "Buzz." 
// For numbers that are multiples of both 3 and 5, print "FizzBuzz."


for(let i=1;i<=100;i++)
{

if(i%3===0 && i%5===0) console.log(`value of i:${i} :FizzBuzz`);
 else if(i%3===0) console.log(`value of i:${i} :Fizz`);
else if(i%5===0) console.log(`value of i:${i} :Buzz`);


}
