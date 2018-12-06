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
 * 如果一个属性名称是 symbol
 * 则该属性是 non-enumerable 的
 */
console.log(JSON.stringify({ [Symbol()]: "ANONYMOUS" })); // {}
for (let k in { [Symbol()]: "ANONYMOUS" }) {
  console.log(key);
}
