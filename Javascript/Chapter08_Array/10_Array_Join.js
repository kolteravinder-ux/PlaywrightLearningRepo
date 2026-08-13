//join() - Converts array to String

// let ar=[1,2,3]
// let s=ar.join("|")
// console.log(s)

let ar1=["ABC","CDE","EFG"]
let s1=ar1.join(":")
console.log(s1)

const users = ["admin", "editor"];

for (const role of users) {
  const landingPage = `/${role}/dashboard`;
  console.log(role, landingPage);
}