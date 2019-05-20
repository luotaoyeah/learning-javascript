/*
 * 因为 array 也是 object, 因此 array 上面可以添加任意的 property；
 * 当 property name 是 non-negative integer 时, 该 property 称为 index；
 * 即所有的 index 都是 property, 但是只有 non-negative integer 的 property 称为 index；
 */
console.log("\n-------------------------------------------------- 01");
const array01 = ["a"];
array01.x = "x";
/* [ 'a', x: 'x' ] */
console.log(array01);

/*
 * 当 property name 为：
 *    a. non-negative integer,
 *     b. non-negative integer 的 string,
 *     c. 值为 non-negative integer 的 floating-point number,
 * 该 property 会被当做 index, 否则或被当做普通的 property；
 */
console.log("\n-------------------------------------------------- 02");
const array02 = [];

array02[0] = "a";
array02["1"] = "b";
array02[2.0] = "c";
array02["-1"] = "d";
/* [ 'a', 'b', 'c', '-1': 'd' ] */
console.log(array02);

export {};
