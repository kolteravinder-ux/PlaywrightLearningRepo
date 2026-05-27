/*
Q44. AMAZON INTERVIEW:
Find the second largest number in:
[45,78,23,90,56,12,90]
Don't use sort(). Handle duplicates.
Expected Output: 78
*/

let a=[45,78,23,90,56,12,90]
let unique = [...new Set(a)];
console.log(unique)

//or
let newarr = a.reduce((acc,value)=>acc.includes(value)?acc:acc.concat(value),[])
console.log(newarr)

if (unique.length < 2) return null;
    
    let first = -Infinity;
    let second = -Infinity;
    
    for (let num of unique) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second) {
            second = num;
        }
    }
    
    console.log(second)




