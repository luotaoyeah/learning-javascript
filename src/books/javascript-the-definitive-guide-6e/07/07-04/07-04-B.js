/*
 * 无论是 dense array 还是 sparse array，length 肯定大于 array 中最大的 index；
 * 为了保证这一特性，array 具有以下行为：
 */

/*
 * 当赋值一个 index 大于当前 length 的 element 时，length 会自动变更为 index + 1；
 */
console.log("\n-------------------------------------------------- 01");
const array01 = [];
array01[9] = "9";
/* 10 */
console.log(array01.length);

/*
 * 当设置 length 为比当前 length 小的值时，index 大于或等于 length 的 element 会被 delete 掉；
 */
console.log("\n-------------------------------------------------- 02");
const array02 = [1, 2, 3, 4];
array02.length = 2;
/* [ 1, 2 ] */
console.log(array02);

/*
 * 当设置 length 为比当前 length 大的值时，不会添加 element，array 会变成 sparse array；
 */
console.log("\n-------------------------------------------------- 03");
const array03 = [1];
array03.length = 9;
/* [ 1, <8 empty items> ] */
console.log(array03);

export {};
