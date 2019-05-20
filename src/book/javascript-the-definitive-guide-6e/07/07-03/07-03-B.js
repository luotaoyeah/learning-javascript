/*
 * TODO 待验证
 * 使用 array literal 创建 array 时, 留空的 element 的值为 undefined, 它并不是一个 sparse array,
 * 可以使用 in 来判断某个 element 是 non-exist, 还是值为 undefined；
 */
console.log("\n-------------------------------------------------- 01");
const array01 = [, "b"];
const array02 = [];
array02[1] = "b";

/* false */
console.log(0 in array01);
/* false */
console.log(0 in array02);

export {};
