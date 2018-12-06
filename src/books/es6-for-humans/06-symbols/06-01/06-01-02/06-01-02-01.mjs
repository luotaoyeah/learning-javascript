/*
 * Symbols in ES6
 *     Symbols
 */

console.log("\n-------------------------------------------------- 01");
/*
 * symbol 的主要用途：用作属性名称
 */
const obj = {
  name: "FOO",
  say() {},
  [Symbol()]() {}
};
console.log(obj); // { name: 'FOO', say: [Function: say], [Symbol()]: [Function] }

console.log("\n-------------------------------------------------- 02");
/*
 * 如果一个属性名称是一个 symbol
 * 则该属性不会被 for...in 遍历
 */
for (let k in { [Symbol()]: "ANONYMOUS" }) {
  console.log(key);
}
