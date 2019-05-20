/*
 * Symbols in ES6
 *     Symbols
 */

console.log("\n-------------------------------------------------- 01");
/*
 * symbol 属性, 不能通过 Object.getOwnPropertyNames() 获取,
 * 需要通过 Object.getOwnPropertySymbols() 获取
 */

const symbol = Symbol();
const obj = {
  name: "FOO",
  [symbol]: "BAR"
};

console.log(Object.getOwnPropertyNames(obj)); // [ 'name' ]
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol() ]

console.log(Object.getOwnPropertySymbols(obj)[0] === symbol); // true

console.log(obj[symbol]); // BAR
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]); // BAR
