/*
 * Symbol.prototype.description
 */

console.log("\n-------------------------------------------------- 01");
/*
 * Symbol.prototype.description 和 Symbol.prototype.toString() 的区别在于：
 *     toString() 方法返回的字符串中，外面多包了一层 Symbol()
 */

const symbol01 = Symbol("FOO");

console.assert(symbol01.description === "FOO");
console.assert(symbol01.toString() === "Symbol(FOO)");

export {};
