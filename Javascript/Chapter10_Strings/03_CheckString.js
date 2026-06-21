let str="hello world."

console.log(str.includes('world')) // true
console.log(str.includes('Starts')) // false

console.log(str.startsWith('h')) // true
console.log(str.endsWith('d'))   //false


console.log(str.indexOf('d')) //10
console.log(str.indexOf('h'))  //0


console.log(str.lastIndexOf('l'))  // will find the last index of passed character //9
console.log(str.lastIndexOf('z'))  // if string or character is not present in Strig then returs -1


console.log(str.search('l'))  // returns the starts and first index //2
console.log(str.search('world')) // returns the start of index for first character //6
console.log(str.search('Given'))   // if given string is not present then returns -1
