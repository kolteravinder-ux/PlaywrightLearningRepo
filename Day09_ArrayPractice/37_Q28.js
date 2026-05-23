/*
Q28. Count test results by status:
let results = ['pass','fail','pass','pass','skip','fail','pass']
Use reduce() to create: { pass: 4, fail: 2, skip: 1 }
*/
let results = ['pass','fail','pass','pass','skip','fail','pass']

let count = results.reduce((ele,indx)=>{

    ele[indx]=(ele[indx]||0) +1
    return ele;
},{})

console.log(count)