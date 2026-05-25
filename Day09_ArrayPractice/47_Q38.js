/*
Q38. Use traditional for loop to find first occurrence of 'fail':
['pass','pass','fail','pass','skip']
Break the loop when found and print index.
*/
let stat =['pass','pass','fail','pass','skip']

for(let i=0;i<stat.length;i++)
{
    if(stat[i]==="fail"){
        console.log(`first occurrence of 'fail' at index:${i}`)
        return
    }
}


