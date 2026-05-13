//What is the difference between var, let, and const?
//What is the Hoisting in JavaScript?
//Can we change the value of a const variable? Explain with an example.
//What is the difference between function scope and block scope? How does it relate to var vs let/const?

//What will be the output of the following code, and why?
for (var i = 0; i < 3; i++) {
     setTimeout(() => console.log(i), 100);    //3 3 3 
   }
console.log("--------------------------------------")
   for (let j = 0; j < 3; j++) {
     setTimeout(() => console.log(j), 100);  // 0 1 2 
   }

