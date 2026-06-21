/*
Q10. Replace the element at index 2 with 'UPDATED' in this array:
['step1', 'step2', 'step3', 'step4']
Expected Output: ['step1', 'step2', 'UPDATED', 'step4']
*/
let arr=['step1', 'step2', 'step3', 'step4']

arr.splice(2,1,"Updated")
console.log(arr)
