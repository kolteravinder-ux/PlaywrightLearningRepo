/*
Q47. PLAYWRIGHT SCENARIO - Parallel Test Execution:
Split test cases into N batches for parallel execution:
tests = ['test1','test2','test3','test4','test5','test6']
batches = 2
Output:
[
  ['test1','test2'],
  ['test3','test4'],
  ['test5','test6']
]
*/

let tests= ['test1','test2','test3','test4','test5','test6']
let batches=2
let arr=new Array()
for(let i=0;i<tests.length;i+=batches)
{
arr.push(tests.slice(i,i+batches))
}
console.log(arr)
