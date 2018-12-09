/*
 * Arrays and Collections
 *     Typed Arrays
 *         Basics of Using Typed Arrays
 */

console.log("\n-------------------------------------------------- 01");
/*
 * JS 的 array 中可以存放任意类型的元素，
 * 这种特性的缺点是：无法更好地进行性能优化
 */
const arr01 = [9, "a", false, null, undefined, Symbol(), {}, [], () => {}];

/*
 * ES6 中引入了 typed array
 * typed array 保证了 array 中只能存放某个类型的元素，可以更好地保证性能
 * typed array 主要用来处理二进制数据
 */

/*
 * typed array 由两个部分组成：ArrayBuffer 和 DataView
 *     ArrayBuffer 用来存放底层数据
 *     DataView 用来提供高层接口
 *         DataView 包含多个具体类型：
 *             Int8Array
 *             Uint8Array
 *             Uint8ClampedArray
 *             Int16Array
 *             Uint16Array
 *             Int32Array
 *             Uint32Array
 *             Float32Array
 *             Float64Array
 */

/*
 * 首先创建一个16个字节（16*8=128bit）的 ArrayBuffer
 * 然后创建一个32bit的 DataView（Int32Array）
 * 因此总共可以存放（128/32=4）个元素
 */
const arrayBuffer = new ArrayBuffer(16);
const int8Array = new Int32Array(arrayBuffer);
for (let i = 0; i < int8Array.length; i++) {
  int8Array[i] = i * 2;
}
console.log(int8Array); // Int32Array [ 0, 2, 4, 6 ]
