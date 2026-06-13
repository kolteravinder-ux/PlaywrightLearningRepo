// function openBrowser(){
// return new Promise(function(resolve){
//     resolve("Open Browser!")
// })
// }

// function GoToLogin(){
// return new Promise(function(resolve){
//     resolve("Navigate to Login Page!")
// })
// }

// function enterCred(){
// return new Promise(function(resolve){
//     resolve("Enter Credentials!")
// })
// }

// openBrowser().then(function(msg){
//     console.log("Step 1 is completed for open browser")
//     return GoToLogin()
// }).then(function(msg){
//     console.log("step2 Navigated to Login Page")
//     return enterCred()
// }).then(function(msg){
//     console.log("step3 Enter Credentials Page ")
//    console.log(msg)
// }).catch(function(){
//     console.log("Error Appeared!")
// })


function openBrowser(){
return new Promise(function(resolve, reject){
    resolve("Open Browser!")
})
}

function GoToLogin(){
return new Promise(function(resolve, reject){
    reject("Navigate to Login Page!")
})
}

function enterCred(){
return new Promise(function(resolve, reject){
    resolve("Enter Credentials!")
})
}

openBrowser().then(function(msg){
    console.log("Step 1 is completed for open browser")
    return GoToLogin()
}).then(function(msg){
    console.log("step2 Navigated to Login Page")
    return enterCred()
}).then(function(msg){
    console.log("step3 Enter Credentials Page ")
   console.log(msg)
}).catch(function(){
    console.log("Error Appeared!")
})