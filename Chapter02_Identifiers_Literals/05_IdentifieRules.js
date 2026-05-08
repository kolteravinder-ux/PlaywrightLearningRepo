// JavaScript Identifier Rules with examples

// Rule 1: Identifiers must start with a letter (a-z or A-Z), `$`, or `_`.
//   Valid: `a`, `A`, `$foo`, `_bar`
let a_Rule1 = 1 // starts with a lowercase letter
let A_Rule2 = 2 // starts with an uppercase letter
let $_Rule3 = 3 // starts with a dollar sign
let _Rule4 = 4  // starts with an underscore

// Rule 2: Subsequent characters may include letters, digits (0-9), `$`, or `_`.
//   Valid: `myVar1`, `user_2`, `count$`.
let Rule5_12334 = 'contains digits after first char'

// Rule 3: Identifiers are case-sensitive.
let value = 'lowercase'
let Value = 'uppercase'

// Rule 4: Identifiers cannot start with a digit.
//   Invalid example (commented out because it would throw a SyntaxError):
// let 1stPlace = 'nope' // starts with a digit — invalid

// Rule 5: Identifiers cannot contain spaces or hyphens.
//   Invalid examples (comments):
// let my var = 1   // contains a space — invalid
// let my-var = 2   // hyphen treated as subtraction — invalid

// Rule 6: Identifiers must not be reserved words (like `return`, `function`, `class`).
//   Invalid example (commented):
// let return = 5   // `return` is a reserved word — invalid

// Rule 7: Unicode letters are allowed (e.g., accented characters, non-Latin scripts).
let café = 'unicode is allowed'

// Quick summary examples (valid):
let $ = 'dollarAsName'
let _ = 'underscoreAsName'
let camelCaseExample = 'good'
let PascalCaseExample = 'also good'
let snake_case_example = 'fine too'

// Console output to show case-sensitivity and examples (uncomment to run):
// console.log(value, Value, Rule5_12334, café, camelCaseExample)

