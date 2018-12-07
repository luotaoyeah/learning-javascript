/*
 * Symbols in ES6
 *     Built-In Symbols
 */

console.log("\n-------------------------------------------------- 01");
/*
 * ES6 预定义了一些内置的 symbol
 */

console.log(Object.getOwnPropertySymbols(Array.prototype)); // [ Symbol(Symbol.iterator), Symbol(Symbol.unscopables) ]
console.log(Object.getOwnPropertySymbols(Function.prototype)); // [ Symbol(Symbol.hasInstance) ]
