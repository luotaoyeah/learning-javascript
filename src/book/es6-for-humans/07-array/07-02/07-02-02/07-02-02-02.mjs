/*
 * Arrays and Collections
 *     Typed Arrays
 *         Typed Arrays and Normal Arrays
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 用于初始化 DataView 的 ArrayBuffer 的字节长度（byteLength）
 * 必须是元素大小的整数倍
 */

/*
 * Int16Array 的元素大小为（16/8=2）2个字节,
 * 因此它的 ArrayBuffer 的 byteLength 必须是 2 的整数倍
 */
console.log(new Int16Array(new ArrayBuffer(5))); // RangeError: byte length of Int16Array should be a multiple of 2

export {};
