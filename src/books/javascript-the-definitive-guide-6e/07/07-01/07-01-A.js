/*
 * 7.1 Creating Arrays
 */

/*
 * 使用 array literal 创建数组；
 *     元素由 comma 分隔，包含在 square brackets 中；
 */
console.log("\n-------------------------------------------------- 01");
const array01 = [];
const array02 = [1, 2, 3];
const array03 = [0, false, "x", null];

/*
 * array literal 中的元素可以是任意的表达式，不一定非得是常量；
 */
console.log("\n-------------------------------------------------- 02");
const num = 0;
const array04 = [num, num + 1, num - 1, num * num];
/* [ 0, 1, -1, 0 ] */
console.log(array04);

/*
 * array literal 中的元素如果留空，则元素值为 undefined；
 */
console.log("\n-------------------------------------------------- 03");
/* undefined */
console.log([1, , 3][1]);

/*
 * array literal 中允许末尾加上一个逗号；
 */
console.log("\n-------------------------------------------------- 04");
/* 2 */
console.log([, ,].length);

export {};
