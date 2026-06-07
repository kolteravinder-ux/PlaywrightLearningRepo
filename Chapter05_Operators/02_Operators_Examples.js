// Examples: Assignment, Arithmetic, Modulus, Exponential Operators

// Assignment Operators
let a = 10;
console.log('Initial a =', a);

a += 5; // a = a + 5
console.log('After a += 5 ->', a);

a -= 3; // a = a - 3
console.log('After a -= 3 ->', a);

a *= 2; // a = a * 2
console.log('After a *= 2 ->', a);

a /= 4; // a = a / 4
console.log('After a /= 4 ->', a);

// Arithmetic Operators
const x = 7;
const y = 3;
console.log('\nArithmetic:');
console.log('x + y =', x + y);
console.log('x - y =', x - y);
console.log('x * y =', x * y);
console.log('x / y =', x / y);

// Modulus Operator
console.log('\nModulus:');
console.log('7 % 3 =', 7 % 3); // remainder of 7 / 3
console.log('10 % 4 =', 10 % 4);

// Exponential Operator
console.log('\nExponential:');
console.log('2 ** 3 =', 2 ** 3); // 2 to the power of 3
console.log('5 ** 2 =', 5 ** 2);

// Compound exponential assignment
let n = 2;
n **= 4; // n = n ** 4
console.log('n **= 4 ->', n);

// Small combined example
let combined = 3;
combined = (combined + 2) * 4; // uses arithmetic and assignment
console.log('\nCombined result ->', combined);

// End of examples


console.log(isNaN(NaN))