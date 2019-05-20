/*
 * Symbol.prototype.description
 */

/*
 * 返回 symbol 对象的描述信息, 只读属性
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 默认值为 undefined
 */
const symbol01 = Symbol();
console.assert(symbol01.description === undefined);

console.log("\n-------------------------------------------------- 02");
const symbol02 = Symbol("FOO");
console.assert(symbol02.description === "FOO");

console.assert(Symbol.iterator.description === "Symbol.iterator");

console.assert(Symbol.for("FOO").description === "FOO");

export {};
