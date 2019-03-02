/*
 * String.prototype.trimStart()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * trimStart() 返回的是一个新的字符串，原字符串不会受影响
 */

const str01 = "\nFOO";

console.assert(str01.trimStart() === "FOO");
console.assert(str01 === "\nFOO");

export {};
