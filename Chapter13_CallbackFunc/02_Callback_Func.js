function cafe(orderfoodname, callMeWhenTableFound){
    console.log('Finding Table..1')
    console.log('Finding Table..2')
    console.log('Finding Table..3')
    console.log('Finding Table..4')
    callMeWhenTableFound()

}

cafe("Burger",()=>{
console.log('Arrow=> Got the table bring the food.') 
})


