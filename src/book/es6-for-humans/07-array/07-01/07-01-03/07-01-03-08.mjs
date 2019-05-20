/*
 * Arrays and Collections
 *     Array.prototype.fill()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * Array.prototype.fill() 方法,
 * 用来填充数组元素
 */
console.log([1, 2, 3].fill(4)); // [ 4, 4, 4 ]

console.log("\n-------------------------------------------------- 02");
/*
 * 可以指定开始索引和结束索引,
 * 默认的开始索引为 0
 * 默认的结束索引为 length
 */
console.log([1, 2, 3].fill(4, 0, 3)); // [ 4, 4, 4 ]
console.log([1, 2, 3].fill(4, 1, 2)); // [ 1, 4, 3 ]

export {};
