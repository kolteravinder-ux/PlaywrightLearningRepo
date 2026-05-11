// map() - returns a new array after verification
let a=[10,20,25,5,30]

let grade=a.map(x => x>15 ? "Pass":"Fail")
console.log(grade)  //[ 'Fail', 'Pass', 'Pass', 'Fail', 'Pass' ]

//filter- keeps element that will meet the condition else it will not keep it

let arrFilter=a.filter(x => x>15)
console.log(arrFilter)  //[ 20, 25, 30 ]

//reduce - accumalates to a single value, reduce complete array to single value
let total=a.reduce((sum,s) => sum+s)
console.log(total) //90

