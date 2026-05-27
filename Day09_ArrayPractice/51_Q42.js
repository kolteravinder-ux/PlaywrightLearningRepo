/*
Q42. Flatten nested array:
[[1,2],[3,4],[5,6]]
Use reduce() or flat().
Expected Output: [1,2,3,4,5,6]
*/
let nestArr=[[1,2],[3,4],[5,6]]
//console.log(nestArr.flat())

const flattened = nestArr.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattened); // Expected: [1,2,3,4,5,6]