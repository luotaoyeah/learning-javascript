/*
 * 7.5 Adding and Deleting Array Elements
 */

/*
 * 直接给 index 赋值的方式添加 element；
 */
console.log("\n-------------------------------------------------- 01");
const array01 = [];
array01[0] = "a";
/* [ 'a' ] */
console.log(array01);

/*
 * 使用 push() 往末尾添加一个或多个 element；
 */
console.log("\n-------------------------------------------------- 02");
const array02 = ["a"];
array02.push("b", "c");
/* [ 'a', 'b', 'c' ] */
console.log(array02);

/*
 * 使用 unshift() 往开头添加一个或多个 element；
 */
console.log("\n-------------------------------------------------- 03");
const array03 = ["a"];
array03.unshift("b", "c");
/* [ 'b', 'c', 'a' ] */
console.log(array03);

export {};
