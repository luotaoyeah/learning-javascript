/*
 * all undefined elements are sorted to the end of the array
 */
console.log('\n-------------------------------------------------- 01');
const array = [undefined, 3, undefined, 2];
/* [ 2, 3, undefined, undefined ] */
console.log(array.sort());
/* [ 3, 2, undefined, undefined ] */
console.log(array.sort((a, b) => b - a));

export {};
