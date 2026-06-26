let responsecode:number[]=[200,300,400]

function getFailedCodes(codes:number[]):number[]{

return codes.filter(function(num:number){
    if(num>200)
    return num;
});

}

console.log(getFailedCodes(responsecode))