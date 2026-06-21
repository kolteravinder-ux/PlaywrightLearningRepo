function cafe(orderfoodname, callMeWhenTableFound){
    console.log('Finding Table..1')
    console.log('Finding Table..2')
    console.log('Finding Table..3')
    console.log('Finding Table..4')
    callMeWhenTableFound()

}

function callMeWhenTableFound()
{
    console.log('Bring the food.')
}

//Call through 1 scenario
cafe("momo", callMeWhenTableFound)

//Call through 2 scenario
cafe("momo", function(){
    console.log('Call on Phone.')
})

//Call through 3 scenario
cafe("Burger",()=>{
console.log('Arrow=> Got the table bring the food.') 
})


