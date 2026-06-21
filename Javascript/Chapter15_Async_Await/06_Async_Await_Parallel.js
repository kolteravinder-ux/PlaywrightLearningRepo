function apiCall(name)
{
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve(name, "200 OK!")
        },2000)
    })
}

async function ParallelTest() {
    console.log("Starting of the Test.");
    let Start=Date.now();

    let [r1,r2,r3]= await Promise.allSettled([

        apiCall("Auth Service"),
        apiCall("User login Service"),
        apiCall("User Dashboard")
    ])

    console.log(r1);
    console.log(r2);
    console.log(r3);

    console.log("Time:",(Date.now()-Start)+'ms');
    
    
}
ParallelTest() 
