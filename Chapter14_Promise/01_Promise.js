let order= new Promise(function(resolve, reject)
{
let foodready=true
if(foodready)
    resolve("Pizza is ready")
else
    reject("Food is not ready")

})

console.log(order)
