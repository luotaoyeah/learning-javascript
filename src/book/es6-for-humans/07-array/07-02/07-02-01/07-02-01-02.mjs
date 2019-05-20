/*
 * Arrays and Collections
 *     Typed Arrays
 *         Basics of Using Typed Arrays
 */

console.log("\n-------------------------------------------------- 01");
/*
 * Uint8ClampedArray 中的 clamped 表示的意思是：
 * 当元素值超出范围（0-255）时, 会取范围内的最接近的值,
 * 即：
 *     如果小于 0, 会取 0
 *     如果大于 255, 会取 255
 *     如果不是整数, 会四舍五入取最近的整数
 */

const uint8ClampedArray = new Uint8ClampedArray(new ArrayBuffer(3));
uint8ClampedArray[0] = -1;
uint8ClampedArray[1] = 256;
uint8ClampedArray[2] = 1.5;
console.log(uint8ClampedArray); // Uint8ClampedArray [ 0, 255, 2 ]

const uint8Array = new Uint8Array(new ArrayBuffer(3));
uint8Array[0] = -1;
uint8Array[1] = 256;
uint8Array[2] = 1.5;
console.log(uint8Array); // Uint8Array [ 255, 0, 1 ]

export {};
