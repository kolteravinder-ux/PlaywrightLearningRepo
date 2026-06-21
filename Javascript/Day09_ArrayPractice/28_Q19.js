/*
Q19. Find the first browser that supports a specific feature:
let browsers = [
  { name: 'IE', supportsES6: false },
  { name: 'Chrome', supportsES6: true },
  { name: 'Firefox', supportsES6: true }
]
Use find() to get the first browser with supportsES6: true.
Expected Output: { name: 'Chrome', supportsES6: true }
*/
let browsers = [
  { name: 'IE', supportsES6: false },
  { name: 'Chrome', supportsES6: true },
  { name: 'Firefox', supportsES6: true }
]

console.log(browsers.find(x=>x.supportsES6===true))


