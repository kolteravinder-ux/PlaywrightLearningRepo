

function getFirstEle<T>(result:T[]){

    return result[0]
}

let ApiResult=[200,400,500]
let StatusResult=["Pass", "Fail", "Neutral"]  

//<T> at first time if we are assigning Number Data type then we have to keep Number data type variables only
// 
console.log(getFirstEle(ApiResult))

console.log(getFirstEle(StatusResult))