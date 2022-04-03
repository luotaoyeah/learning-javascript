/*
 * Example: Concatenating nested arrays
 */

console.log('\n-------------------------------------------------- 01');
const array01 = [[1]];
const array02 = array01.concat([3]);
/* [ [ 1 ], 3 ] */
console.log(array02);

array01[0].push(2);
/* [ [ 1, 2 ], 3 ] */
console.log(array02);

export {};
