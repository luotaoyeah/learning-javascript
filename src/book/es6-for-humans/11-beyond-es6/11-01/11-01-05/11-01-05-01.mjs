/*
 * Beyond ES6
 *     String.prototype.padStart()
 *     String.prototype.padEnd()
 */

console.log("\n-------------------------------------------------- 01");
const str = "foo";
console.log(str.padStart(5)); // "  foo"
console.log(str.padEnd(5)); // "foo  "
console.log(str.padStart(5, "__")); // "__foo"
console.log(str.padEnd(5, "__")); // "foo__"

export {};
