/*
 * 如果没有指定比较函数, 则把所有非 undefined 的元素转换为 string, 然后按照字符顺序排序;
 */
console.log('\n-------------------------------------------------- 01');
/* [ 'A', 'C', 'D' ] */
console.log(['D', 'A', 'C'].sort());
/* [ 1, 20, 3 ] */
console.log([1, 3, 20].sort());

/*
 * 返回结果为数组本身;
 */
console.log('\n-------------------------------------------------- 02');
const array01 = [];
/* true */
console.log(array01 === array01.sort());

export {};
