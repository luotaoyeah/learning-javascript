/*
 * String.prototype.trimEnd()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 移除字符串末尾的空格字符，包括：
 *     空格（" "），
 *     制表符（" "），
 *     \t（tab），
 *     \v（vertical tab），
 *     \n（new line），
 *     \r（carriage return）
 */

console.assert("FOO ".trimEnd() === "FOO");
console.assert("FOO ".trimEnd() === "FOO");
console.assert("FOO\t".trimEnd() === "FOO");
console.assert("FOO\v".trimEnd() === "FOO");
console.assert("FOO\n".trimEnd() === "FOO");
console.assert("FOO\r".trimEnd() === "FOO");

export {};
