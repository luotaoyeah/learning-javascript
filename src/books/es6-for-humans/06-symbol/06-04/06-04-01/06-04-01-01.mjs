/*
 * Symbols in ES6
 *     Symbol.keyFor()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * Symbol.for() 方法根据 key 查找对应的 symbol
 * Symbol.keyFor() 方法根据 symbol 查找对应的 key
 * 如果对应的 symbol 不存在，则返回 undefined
 */

const symbol = Symbol.for("FOO");
console.log(Symbol.keyFor(symbol)); // FOO
console.log(Symbol.keyFor(Symbol())); // undefined
