/*
1. you will recieve an array of API response write code to 
    1.1 Check if all responses are successful(200-299)
    1.2. Find The first non success code.
    1.3 Return of unique error code

    let response=[200,201,404,500,404,200,503]

2. Spot the Bug 
    let responseTimes=[325,85,1200,450,99]
    let sorted= responseTimes.sort();   //1200,325,450,85,99
    console.log("Fastest:",sorted[0])

3. Deep vs Shallow copy
    what is the output and why? how would you fix it?
        let suite1=[{
        name:"login", status:"pass"}];
        let suite2= [...suite1]
        suite[0].status="fail"
        console.log(suite[0].status)

*/
//Answer2
// let responseTimes=[325,85,1200,450,99]
// let sorted= responseTimes.sort();   //1200,325,450,85,99
// console.log("Fastest:",sorted[0])  //1200

// //Answer 3
// // what is the output and why? how would you fix it?
// let suite1=[{name:"login", status:"pass"}];
// let suite2= [...suite1]   // it will copy the array of object in Suite 2 without mutatingthe Suite 1 array
// console.log(suite2)
// console.log(suite1)
// suite2[0].status="fail"    // changing in suite 2 status key element value from pass to fail
// console.log(suite2)
// console.log(suite1)

// console.log(suite1[0].status)     // fail - because line 31 will shallow copy the only 1 level of array object which will focus to same memory using by suite 1 and 2
// /*
// "The output is 'fail'. This happens because the spread operator [...suite1] creates a 
// shallow copy — it copies the array but not the nested objects. Both suite1[0] and suite2[0] point 
// to the same object in memory, so changing suite2[0].status also changes suite1[0].status.
// To fix it, we need a deep copy. The best modern solution is structuredClone(suite1). 
// For broader compatibility, we can use JSON.parse(JSON.stringify(suite1)). 
// For this specific case with an array of simple objects,
//      we can also use suite1.map(item => ({...item}))."

// */
// let suite1 = [{name:"login", status:"pass"}];
// let suite2 = suite1.map(item => ({...item}));  // Deep copy

// suite2[0].status = "fail";

// console.log(suite1[0].status);  // "pass" ✅
// console.log(suite2[0].status);  // "fail"

//Answer1
// 1. you will recieve an array of API response write code to 
//     1.1 Check if all responses are successful(200-299)
//     1.2. Find The first non success code.
//     1.3 Return of unique error code



