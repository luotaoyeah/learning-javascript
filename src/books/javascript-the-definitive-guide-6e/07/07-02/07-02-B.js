/*
 * array 是一种特殊的 object，使用 [] 访问 array element，类似于使用 [] 访问 object property；
 * [] 中的 number 会被转换为 string；
 */
console.log("\n-------------------------------------------------- 01");

const obj01 = {};
obj01[0] = "x";
obj01[1] = "y";
/* { '0': 'x', '1': 'y' } */
console.log(obj01);

/*
 * array 相比于 object 特殊的地方在于：
 *     当 property name 是 non-negative integer 时，array 会自动维护它的 length 属性；
 */
console.log("\n-------------------------------------------------- 02");

const array01 = [1];
/* 1 */
console.log(array01.length);
array01[2] = 3;
/* 3 */
console.log(array01.length);

export {};
