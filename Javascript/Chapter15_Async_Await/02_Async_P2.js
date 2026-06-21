function getToken(){

    return Promise.resolve("TokenABC")
}

async function run(){
    let token = await getToken();
    console.log(token)
}

run();