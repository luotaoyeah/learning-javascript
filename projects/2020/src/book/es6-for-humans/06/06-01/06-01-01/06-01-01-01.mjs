/*
 * Symbols in ES6
 *     Symbols
 */

console.log('\n-------------------------------------------------- 01');
/*
 * symbol 是一种新的原始数据类型（primitive type）,
 * ES6 中总共有六种原始数据类型：
 *     number, string, boolean, null, undefined, symbol
 *
 * symbol 的主要作用：用来表示一个唯一的值
 */

/*
 * 使用 Symbol() 工厂方法创建一个新的 symbol
 */

const symbol = Symbol();
console.log(symbol); // Symbol()

console.log('\n-------------------------------------------------- 02');
/*
 * symbol 的 typeof 结果为：symbol
 */

const symbol02 = Symbol();
console.log(typeof symbol02); // symbol
