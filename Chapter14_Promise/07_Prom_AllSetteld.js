Promise.allSettled([
    Promise.resolve("Test A Passed"),
    Promise.reject("Test B Passed"), 
    Promise.resolve("Test C Passed")
]).then(function(result){
    console.log(result)
}).catch(function(result){
    console.log("Failed:",result)
})
/*
output:
[
  { status: 'fulfilled', value: 'Test A Passed' },
  { status: 'rejected', reason: 'Test B Passed' },
  { status: 'fulfilled', value: 'Test C Passed' }
]
  */