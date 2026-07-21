function sayHello(msg:string):string{
    
    console.log(msg);
    return msg
}

function sayHello1(msg:number):number{
    console.log(msg);
    return msg
}

function sayHello2(msg:number):void{
    console.log(msg);
   // return msg
}

function sayHello3(msg:number):never{
    console.log(msg);
    throw new Error("This function never returns");
}

sayHello3(1)