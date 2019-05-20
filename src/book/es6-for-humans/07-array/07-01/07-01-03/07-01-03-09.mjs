/*
 * Arrays and Collections
 *     Array.prototype.copyWithin()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * Array.prototype.copyWithin() 方法,
 * 将数组中某一截元素拷贝到数组中其他位置
 */
const arr01 = ["a", "b", "c", "d", "e", "f"];
console.log(arr01.copyWithin(3)); // [ 'a', 'b', 'c', 'a', 'b', 'c' ]

console.log("\n-------------------------------------------------- 02");
/*
 * 可以指定拷贝元素的开始索引和结束索引
 * 默认的开始索引为 0
 * 默认的结束索引为 length
 */
const arr02 = ["a", "b", "c", "d", "e", "f"];
console.log(arr02.copyWithin(3, 2, 4)); // [ 'a', 'b', 'c', 'c', 'd', 'f' ]

export {};
