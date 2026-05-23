/*
Q30. PLAYWRIGHT SCENARIO:
Transform test data for data-driven testing:
let rawData = ['user1:pass1','user2:pass2','user3:pass3']
Use map() to convert to:
[
  { username: 'user1', password: 'pass1' },
  { username: 'user2', password: 'pass2' },
  { username: 'user3', password: 'pass3' }
]
*/
// let rawData = ['user1:pass1','user2:pass2','user3:pass3']

// let actdata=rawData.map(x=>{

//   let a=x.split(':');

//  return{
//   username: a[0],
//   password: a[1]
//  };

// });

// console.log(actdata)

//Method 2
// let rawData = ['user1:pass1', 'user2:pass2', 'user3:pass3'];

// let testData = rawData.map(item => {
//     let [username, password] = item.split(':');
//     return { username, password };
// });

// console.log(testData);

//method 3
let rawData = ['user1:pass1', 'user2:pass2', 'user3:pass3'];

let testData = rawData.map(item => {
    let [username, password] = item.split(':');
    return { username, password };
});

// Or even shorter:
let testData = rawData.map(item => 
    ({ username: item.split(':')[0], password: item.split(':')[1] })
);