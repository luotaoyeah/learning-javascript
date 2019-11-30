/*
 * 可以设置 length 的 writable 为 false；
 */
console.log("\n-------------------------------------------------- 01");
const array01 = [1, 2, 3];

Object.defineProperty(array01, "length", {
  writable: false
});
/*
  /!* TypeError: Cannot assign to read only property 'length' of object '[object Array]' *!/
  array01.length = 9;
*/

/*
 * 可以设置 array 的 element 的 configurable 为 false,
 * 此时, 因为该 element 不能被 delete 掉,
 * 所以不能设置 length 为小于该 element 的 index + 1；
 */
console.log("\n-------------------------------------------------- 02");
const array02 = [1, 2, 3, 4, 5];
Object.defineProperty(array02, "2", {
  configurable: false
});
array02.length = 3;
/* [ 1, 2, 3 ] */
console.log(array02);
/*
  /!* TypeError: Cannot delete property '2' of [object Array] *!/
  array02.length = 2;
*/

export {};
