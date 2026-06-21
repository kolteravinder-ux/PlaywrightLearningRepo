// Comparison operator examples: loose (==) vs strict (===)
// Demonstrates common coercion rules and pitfalls

function show(title, expr) {
  try {
    console.log(title.padEnd(45), '->', expr);
  } catch (e) {
    console.log(title.padEnd(45), '->', 'Error:', e.message);
  }
}

console.log('\n-- Basic numeric/string comparisons --');
// expected: true
show("5 == '5'", 5 == '5');
// expected: false
show("5 === '5'", 5 === '5');
// expected: true
show("0 == false", 0 == false);
// expected: false
show("0 === false", 0 === false);
// expected: true
show("'' == 0", '' == 0);
// expected: false
show("'' === 0", '' === 0);

console.log('\n-- null and undefined --');
// expected: true
show('null == undefined', null == undefined);
// expected: false
show('null === undefined', null === undefined);
// expected: false
show('null == 0', null == 0);

console.log('\n-- boolean coercion --');
// expected: false
show("'true' == true", 'true' == true);
// expected: true
show("'1' == true", '1' == true);
// expected: true
show("'0' == false", '0' == false);
// expected: true
show("'' == false", '' == false);

console.log('\n-- whitespace strings and numeric coercion --');
// expected: true  (whitespace-only string coerces to 0)
show("'  \t\n ' == 0", '  \t\n ' == 0);
// expected: false
show("'  \t\n ' === 0", '  \t\n ' === 0);

console.log('\n-- NaN and zeros --');
// expected: false
show('NaN == NaN', NaN == NaN);
// expected: false
show('NaN === NaN', NaN === NaN);
// expected: true
show('+0 === -0', +0 === -0);
// expected: true
show('Object.is(NaN, NaN)', Object.is(NaN, NaN));
// expected: false
show('Object.is(+0, -0)', Object.is(+0, -0));

console.log('\n-- Objects, arrays and toPrimitive coercion --');
// expected: true  ([].toString() -> '')
show('[] == ""', [] == '');
// expected: true  ([].toString() -> '' -> 0)
show('[] == 0', [] == 0);
// expected: true  ([0].toString() -> '0')
show('[0] == 0', [0] == 0);
// expected: true
show('[1,2] == "1,2"', [1,2] == '1,2');
// expected: false (different object references)
show('{} == {}', {} == {});

console.log('\n-- Wrapper objects vs primitives --');
// expected: true  (object coerces to primitive '5' -> number 5)
show("new String('5') == 5", new String('5') == 5);
// expected: false
show("new String('5') === 5", new String('5') === 5);
// expected: true
show("new Number(5) == 5", new Number(5) == 5);
// expected: false
show("new Number(5) === 5", new Number(5) === 5);

console.log('\n-- Edge cases: mixed types --');
// expected: true
show("false == '0'", false == '0');
// expected: false
show("false === '0'", false === '0');
// expected: true (whitespace-only string coerces to 0)
show("0 == '\\n'", 0 == '\n');
// expected: true
show("0 == '\\t'", 0 == '\t');

console.log('\n-- Explicit conversions recommended --');
// expected: true
show("Number('5') === 5", Number('5') === 5);
// expected: true
show("String(5) === '5'", String(5) === '5');
// expected: true
show("Boolean(0) === false", Boolean(0) === false);

console.log('\n-- Comparison summary examples and tips --');
console.log('Tip: prefer === to avoid coercion surprises.');
console.log('Tip: use Object.is() when you need to distinguish +0 and -0 or want NaN equality.');

console.log('\n-- Demonstration of == null pattern --');
// expected: true
show('x == null (matches null OR undefined):', (function(){
  const x = undefined; return x == null; })());
// expected: true
show('x == null when x = null:', (function(){ const x = null; return x == null; })());

console.log('\n-- toString/valueOf influence --');
const obj = { valueOf() { return 2; } };
const obj2 = { toString() { return '3'; } };
// expected: true
show('obj == 2 where obj.valueOf() returns 2', obj == 2);
// expected: true
show('obj2 == 3 where obj2.toString() returns "3"', obj2 == 3);

console.log('\n-- Final note --');
console.log('Loose equality (==) applies complex coercion rules and can be surprising.');
console.log('Strict equality (===) checks type and value with no coercion.');
