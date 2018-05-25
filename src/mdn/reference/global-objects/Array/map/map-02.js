/*
 * map() 不会修改原始数组;
 */

console.log("\n-------------------------------------------------- 01");
const array01 = [1, 2, 3];
/* [ 1, 4, 9 ] */
console.log(array01.map(item => item * item));
/* [ 1, 2, 3 ] */
console.log(array01);

/*
 * 在回调函数中，原始数组可能会被修改;
 */
console.log("\n-------------------------------------------------- 02");
const array02 = [1, 2, 3];
/* [ 1, 4, 9 ] */
console.log(
  array02.map((item, index, array) => {
    const result = item * item;
    array[index] = result;
    return result;
  })
);
/* [ 1, 4, 9 ] */
console.log(array02);

export {};
