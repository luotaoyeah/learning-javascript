/*
 * Array.prototype.flatMap()
 * 相当于先调用 Array.prototype.map() 方法，再调用 Array.prototype.flat() 方法，
 * 其中，flat 的深度为 1
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 跟 Array.prototype.map() 方法的主要区别在于：
 *     会对结果数组进行深度为 1 的平化
 */
const arr01 = [1, 2, 3];
console.log(arr01.map(i => [i * 2])); // [ [ 2 ], [ 4 ], [ 6 ] ]
console.log(arr01.flatMap(i => [i * 2])); // [ 2, 4, 6 ]

/*
 * 等价于先调用 map() 方法，再调用 flat() 方法（深度为1）
 */
console.log(arr01.map(i => [i * 2]).flat(1)); // [ 2, 4, 6 ]

export {};
