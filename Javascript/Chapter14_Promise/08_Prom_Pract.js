/*
Write a function checkAge(age) that returns a Promise:
- Resolves with "Access granted" if age >= 18
- Rejects with "Access denied" if age < 18

Test with age 20 and age 15.
*/
// function checkAge(age){
// return new Promise((resolve, reject)=>age>=18?resolve("Access Granted"):reject("Access Denied"))
// }
// checkAge(18).then((resolve)=>console.log(resolve)).catch((reject)=>console.log(reject))

/*
Write a function waitAndGreet(name, ms) that:
- Waits 'ms' milliseconds
- Then resolves with "Hello, {name}!"

Test: waitAndGreet("Ravi", 2000)
Expected: After 2s → "Hello, Ravi!"
*/

// function waitAndGreet(name, ms)
// {
// return new Promise((resolve, reject)=>{
//     setTimeout(()=>resolve(`Hello, ${name}!`,ms))
// })

// }
// waitAndGreet("Ravi", 2000).then(data=>console.log(data))

/*
Simulate a login flow using Promise chain:
Step 1: validateUser(username)    → returns user object
Step 2: getUserPermissions(user)  → returns permissions
Step 3: loadDashboard(perms)     → returns dashboard data

Chain all three using .then()
*/
function validateUser(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin") {
                resolve({ id: 1, username: "admin" });
            } else {
                reject(new Error("User not found"));
            }
        }, 1000);
    });
}

function getUserPermissions(user) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                ...user,
                permissions: ["read", "write", "delete"]
            });
        }, 1000);
    });
}

function loadDashboard(userWithPerms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                user: userWithPerms.username,
                perms: userWithPerms.permissions,
                dashboard: "Admin Dashboard Loaded ✅"
            });
        }, 1000);
    });
}

// Chain them!
validateUser("admin")
    .then(user => {
        console.log("Step 1 ✅ User:", user.username);
        return getUserPermissions(user);
    })
    .then(userWithPerms => {
        console.log("Step 2 ✅ Perms:", userWithPerms.permissions);
        return loadDashboard(userWithPerms);
    })
    .then(dashboard => {
        console.log("Step 3 ✅", dashboard.dashboard);
    })
    .catch(err => {
        console.log("❌ Error:", err.message);
    });

// Output:
// Step 1 ✅ User: admin
// Step 2 ✅ Perms: ['read', 'write', 'delete']
// Step 3 ✅ Admin Dashboard Loaded ✅
