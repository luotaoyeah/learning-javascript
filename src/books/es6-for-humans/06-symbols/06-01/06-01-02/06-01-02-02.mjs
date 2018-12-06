/*
 * Symbols in ES6
 *     Symbols
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 因为 symbol 属性是 non-enumerable 的，
 * 因此不能通过 Object.getOwnPropertyNames() 获取，
 * 需要通过 Object.getOwnPropertySymbols() 获取
 */

const symbol = Symbol();
const obj = {
  name: "FOO",
  age: 99,
  [symbol]: "BAR"
};

console.log(Object.getOwnPropertyNames(obj)); // [ 'name', 'age' ]
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol() ]
console.log(Object.getOwnPropertySymbols(obj)[0] === symbol); // true

console.log(obj[symbol]); // BAR
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]); // BAR
console.log(Object.getOwnPropertyDescriptor(obj, symbol)); // {value: "FOO", writable: true, enumerable: true, configurable: true}
