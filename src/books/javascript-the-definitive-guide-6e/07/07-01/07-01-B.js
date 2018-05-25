/*
 * 使用 Array() constructor 创建 array，有 3 种方式；
 */

/*
 * 不传参数：
 *     创建一个 empty array，等价于 []；
 */
console.log("\n-------------------------------------------------- 01");
/* [] */
console.log(new Array());
/* [] */
console.log([]);

/*
 * 传一个 numeric 参数：
 *     指定 array 的 length；
 *     array 中的所有 element 都为 undefined；
 */
console.log("\n-------------------------------------------------- 02");
/* [ <2 empty items> ] */
console.log(new Array(2));

/*
 * 传一个 non-numeric argument，或者多个 arguments：
 *    每一个 argument 都表示 array 中的一个 element；
 */
console.log("\n-------------------------------------------------- 03");
/* [ 'x' ] */
console.log(new Array("x"));
/* [ 1, 2, 3 ] */
console.log(new Array(1, 2, 3));
export {};
