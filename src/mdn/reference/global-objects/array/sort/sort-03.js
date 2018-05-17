/*
 * compareFunction 接收2个参数: a, b;
 *    如果返回值 < 0, 则 a 排在 b 前面;
 *    如果返回值 = 0, 则 a 和 b 保持顺序不变;
 *    如果返回值 > 0, 则 b 排在 a 前面;
 */
console.log("\n-------------------------------------------------- 01");
const array = [1, 2, 3, 2, 1];
/* [ 1, 1, 2, 2, 3 ] */
console.log(array.sort((a, b) => a - b));
/* [ 3, 2, 2, 1, 1 ] */
console.log(array.sort((a, b) => b - a));

export {};
