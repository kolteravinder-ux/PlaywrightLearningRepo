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
    resolve("Navigate to Login Page!")
})
}

function enterCred(){
return new Promise(function(resolve, reject){
    resolve("Enter Credentials!")
})
}

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


async function runTheE2E() {
    let msg1= await openBrowser();
    console.log("Step 1:",msg1)

    let msg2= await GoToLogin();
    console.log("Step 2:",msg2)

    let msg3= await enterCred();
    console.log("Step 3:",msg3)


}

runTheE2E()