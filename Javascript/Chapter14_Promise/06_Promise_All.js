let checkBD= Promise.resolve("DB is OK")
let CheckCache=Promise.resolve("Cache is ok")

//for resolve
Promise.all([
    Promise.resolve("CheckAut"),
    Promise.resolve("CheckDb"), 
    Promise.resolve("CheckCache")
]).then(function(result){
    console.log(result)
}).catch(function(result){
    console.log("Failed:",result)
})
// output-> [ 'CheckAut', 'CheckDb', 'CheckCache' ]


//for reject
Promise.all([
    Promise.resolve("CheckAut"),
    Promise.reject("CheckDb"), 
    Promise.resolve("CheckCache")
]).then(function(result){
    console.log(result)
}).catch(function(result){
    console.log("Failed:",result)
})
// Output-> Failed: CheckDb
