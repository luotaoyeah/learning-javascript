/*
 * Beyond ES6
 *     The includes method on Arrays
 */

console.log('\n-------------------------------------------------- 01');
/*
 * Array.prototype.includes() 方法和 indexOf() 方法的区别在于：
 *     对于 NaN 的不同处理
 */

console.log([Number.NaN].includes(Number.NaN)); // true
console.log([Number.NaN].indexOf(Number.NaN) > -1); // false

export {};
