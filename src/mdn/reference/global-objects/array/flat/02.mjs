/*
 * Array.prototype.flat()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 使用 flat() 之后，数组中的空元素会被移除
 */

const arr01 = [1, , 2, , [3, , 4]];
console.log(arr01); // [ 1, <1 empty item>, 2, <1 empty item>, [ 3, <1 empty item>, 4 ] ]
console.log(arr01.flat()); // [ 1, 2, 3, 4 ]
console.log(arr01.flat(2)); // [ 1, 2, 3, 4 ]

export {};
