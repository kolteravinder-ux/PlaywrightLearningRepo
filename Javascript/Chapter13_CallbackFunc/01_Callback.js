function print(){
console.log('Hello World')   
}

function placeholder(Clipboarditem, callback)
{
    console.log("Hello Order placed")
    callback();

}

//where above callback is written name can be anything 
//how to call callbackfunction

//1
placeholder("pizza",print)
//output
//Hello Order placed
//Hello World

//2
placeholder("Burger",function(){
    console.log('Am also function without name.')
})
//output
// Hello Order placed
// Am also function without name.

//3.
placeholder("Dice",()=>{
  console.log('Arrow=> Am also function without name.')  
})
//output
// Hello Order placed
// Arrow=> Am also function without name.