/*
Q23. Extract only usernames from user objects:
let users = [
  { username: 'admin', role: 'admin' },
  { username: 'user1', role: 'user' },
  { username: 'user2', role: 'user' }
]
Use map() to get: ['admin', 'user1', 'user2']
*/
let users = [
  { username: 'admin', role: 'admin' },
  { username: 'user1', role: 'user' },
  { username: 'user2', role: 'user' }
]


let ans=users.map(x=>x.username)
console.log(ans)