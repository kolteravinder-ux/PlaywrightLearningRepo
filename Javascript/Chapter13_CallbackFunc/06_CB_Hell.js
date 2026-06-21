
//Open Browser
//goto Loginpage
//Enter cred
//click login



function openBrowser(callback){
    console.log('Opening the chrom browser')    
    setTimeout(function(){
        callback()   //callback function will call after 1 second opening a browser takes time of 1 second
    }, 2000)
}

function goToLoginPage(callback){
    console.log('Navigating to Login Page')
    setTimeout(function(){
        callback()
    }, 1000)
}

function enterCredentials(callback){
    console.log('Enter Credentials')
    setTimeout(function(){
        callback()
    }, 500)
}

function clickLogin(callback){
    console.log('Click Login')
    setTimeout(function(){
        callback()
    }, 1000)
}

//Below is the callback hell calling function created - it is dificult to understand
openBrowser(function(){
    goToLoginPage(function(){
        enterCredentials(function(){
            clickLogin(function(){
                console.log('CallBack Hell: go To Login')
            })
        })
    })
})