let obj={browser:'Chrome', test:"Test1", version:'abc'};
let a=obj;

console.log(a.browser)//chrome
console.log(obj.browser)//chrome
a.browser="Edge"

console.log(a.browser)//Edge
console.log(obj.browser)//Edge