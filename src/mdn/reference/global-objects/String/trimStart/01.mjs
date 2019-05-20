/*
 * String.prototype.trimStart()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 移除字符串开头的空格字符, 包括：
 *     空格（" "）,
 *     制表符（" "）,
 *     \t（tab）,
 *     \v（vertical tab）,
 *     \n（new line）,
 *     \r（carriage return）
 */

console.assert(" FOO".trimStart() === "FOO");
console.assert(" FOO".trimStart() === "FOO");
console.assert("\tFOO".trimStart() === "FOO");
console.assert("\vFOO".trimStart() === "FOO");
console.assert("\nFOO".trimStart() === "FOO");
console.assert("\rFOO".trimStart() === "FOO");

export {};
