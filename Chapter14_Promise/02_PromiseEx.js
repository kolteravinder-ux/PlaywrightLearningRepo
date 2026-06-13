let apical=new Promise(function(resolve, reject){

    resolve({status:200, body:"User Data"});

})

apical.then(function(response){
    console.log(response.status)
    console.log(response.body)
})