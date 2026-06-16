async function testApi()
{
    try{
        let res= await Promise.reject("503 Error!")
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("clean up!")
    }
}

testApi()