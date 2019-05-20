/*
 * 7.3 Sparse Arrays
 */

/*
 * sparse array 表示 array 中某些 element 不存在；
 * 因此其 length 属性大于其 element 的数量；
 * 有三种方式创建一个 sparse array；
 */

/*
 * 使用 Array() constructor, 并指定一个 non-negative integer 参数；
 */
console.log("\n-------------------------------------------------- 01");
const array01 = new Array(9);
/* [ <9 empty items> ] */
console.log(array01);

/*
 * 设置一个 index 大于当前 length 的 element 的值；
 */
console.log("\n-------------------------------------------------- 02");
const array02 = [];
array02[9] = "9";
/* [ <9 empty items>, '9' ] */
console.log(array02);

/*
 * 使用 delete 删除一个 element；
 */
console.log("\n-------------------------------------------------- 03");
const array03 = ["a"];
delete array03[0];
/* [ <1 empty item> ] */
console.log(array03);

export {};
