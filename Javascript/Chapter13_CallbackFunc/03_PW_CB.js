function test(msg, cbfunc)
{
    console.log(msg);
    cbfunc();
}

test("Message for Test Funct",()=>{

    console.log("Callback function is printing")
})

