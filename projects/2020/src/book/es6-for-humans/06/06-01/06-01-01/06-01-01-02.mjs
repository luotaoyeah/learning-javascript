/*
 * Symbols in ES6
 *     Symbols
 */

console.log('\n-------------------------------------------------- 01');
/*
 * Symbol() 工厂方法可以接受一个参数,
 * 作为 symbol 的描述信息
 */

const symbol01 = Symbol('FOO');
console.log(symbol01); // Symbol(FOO)
console.log(symbol01.toString()); // Symbol(FOO)
console.log(symbol01.valueOf()); // Symbol(FOO)
