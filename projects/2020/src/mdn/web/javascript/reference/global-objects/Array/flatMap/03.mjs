/*
 * Array.prototype.flatMap()
 */

console.log('\n-------------------------------------------------- 01');
/*
 * 可以使用 reduce() + concat() 来模拟 flatMap() 的效果
 */

const arr01 = [1, 2, 3];
console.log(arr01.flatMap((i) => [i * 2])); // [ 2, 4, 6 ]
/*
 * 对于 concat() 方法, 如果参数是一个数组, 则该数组的所有元素会成为新数组的元素,
 * 相当于进行了一次深度为 1 的 flat() 操作
 */
console.log(arr01.reduce((acc, value) => acc.concat([value * 2]), [])); // [ 2, 4, 6 ]

export {};
