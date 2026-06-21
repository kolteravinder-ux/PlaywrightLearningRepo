/*
Q39. PLAYWRIGHT SCENARIO:
Loop through test URLs and create test data:
let pages = ['/home','/login','/dashboard']
Use for...of to create:
[
	{ url: '/home', visited: false },
	{ url: '/login', visited: false },
	{ url: '/dashboard', visited: false }
]
*/
let pages = ['/home','/login','/dashboard']
let testdata = new Array()
pages.forEach((e,i)=>{

testdata.push({
	url:`${e}`,
	visited: false
})
})
console.log(testdata)