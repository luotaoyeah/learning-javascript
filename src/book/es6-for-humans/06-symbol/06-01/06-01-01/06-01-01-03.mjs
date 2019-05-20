/*
 * Symbols in ES6
 *     Symbols
 */

console.log("\n-------------------------------------------------- 01");
/*
 * Symbol() 是一个工厂方法, 不是一个构造方法,
 * 因此不能使用 new
 */

const symbol = new Symbol("FOO"); // TypeError: Symbol is not a constructor
