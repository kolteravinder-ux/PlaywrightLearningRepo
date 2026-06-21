let apical=new Promise(function(resolve, reject){

   let Res=true
if(Res)
    resolve("API Call Is Successful.")
else
    reject("500 Error")


})

apical.then(function(response){
    console.log(response)
}).catch(function(response){
    console.log(response)
}).finally(function(){
    console.log("I will be executing anyhow!")
})