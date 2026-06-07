/*
Q46. GOOGLE INTERVIEW - Two Sum Problem:
Given: [2,7,11,15], target: 9
Find two numbers that add up to target.
Return their indices.
Expected Output: [0,1]
*/
let a=[2,7,11,15]
target=9
let targetIndices=new Array()
for(let i=0;i<a.length;i++)
{
for(let j=i+1;j<a.length;j++)
{
    console.log(`When I value is:${i}`)
console.log(`Then j value is:${j}`)
    let addoftwoelements= a[i]+a[j]
    if(addoftwoelements===target)
    {
        console.log(`At index:${i}, Element:${a[i]} and At index:${j}, Element:${a[j]} , adds upto target:${addoftwoelements}`)
        return

    }
}
}


