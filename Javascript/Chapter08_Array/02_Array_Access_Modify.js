let arr=['Pass','Fail','Skip']
console.log(arr.at(0)) // 1st Element
console.log(arr.at(1)) // 2 Element
console.log(arr.at(2))  // 3 Element
console.log(arr.at(3))   // undefined as element is not present
console.log(arr.at(-1))   // last Element
console.log(arr.at(-2)) //second last Element
console.log(arr.at(-3))  // first element Element
console.log(arr.at(-4)) // undefined as element is not present

arr[1]= 'blocked'  // will change the value of element at position 1
console.log(arr)

arr[5]="record"   //[ 'Pass', 'blocked', 'Skip', <2 empty items>, 'record' ]
console.log(arr)