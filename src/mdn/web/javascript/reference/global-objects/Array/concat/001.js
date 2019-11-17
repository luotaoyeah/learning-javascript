/*
 * 合并多个数组, 返回合并后的数组, 原来的数组不变;
 */

console.log('\n-------------------------------------------------- 01');
const array01 = [1, 2, 3];
const array02 = [4, 5, 6];
/* [ 1, 2, 3, 4, 5, 6 ] */
console.log(array01.concat(array02));
/* [ 1, 2, 3 ] */
console.log(array01);

export {};
