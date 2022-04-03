/*
 * Array.prototype.flat()
 * 对数组元素进行平化, 并返回新的数组
 */

console.log('\n-------------------------------------------------- 01');
/*
 * 默认的平化深度为 1
 */

const arr01 = [[[[1]]]];
console.log(arr01.flat()); // [ [ [ 1 ] ] ]
console.log(arr01.flat(1)); // [ [ [ 1 ] ] ]
console.log(arr01.flat(2)); // [ [ 1 ] ]
console.log(arr01.flat(3)); // [ 1 ]
console.log(arr01.flat(4)); // [ 1 ]

export {};
