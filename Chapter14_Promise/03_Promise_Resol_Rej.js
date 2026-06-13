let apical=new Promise(function(resolve, reject){

    reject("500 Error");

})

apical.then(function(response){
    console.log(response)
    
}).catch(function(errormsg){
    console.log(errormsg)
})