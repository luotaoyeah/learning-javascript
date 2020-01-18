/*
 * Arrays and Collections
 *     Typed Arrays
 *         Typed Arrays and Normal Arrays
 */

console.log('\n-------------------------------------------------- 01');
/*
 * array 中元素的初始值为 undefined
 * typed array 中元素的初始值为 0
 */

console.log(new Float32Array(new ArrayBuffer(16))); // Float32Array [ 0, 0, 0, 0 ]
console.log(new Array(4)); // [ <4 empty items> ]

export {};
