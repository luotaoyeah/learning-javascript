/*
 * 7.4 Array Length
 */

/*
 * 每一个 array 都有 length 属性, 这是 array 和 object 最重要的区别；
 * 对于 dense array, length 表示 element 的个数；
 * 对于 sparse array, length 大于 element 的个数；
 */
console.log("\n-------------------------------------------------- 01");
/* 3 */
console.log([1, 2, 3].length);
/* 3 */
console.log([, , 3].length);

export {};
