/*
 * 7.2 Reading and Writing Array Elements
 */

/*
 * 使用 [] operator 来 read 和 write array element；
 *     [] 左边是一个 array reference, 里边是一个 value 为 non-negative integer 的 expression；
 */
console.log("\n-------------------------------------------------- 01");
const array01 = ["hello"];
/* hello */
console.log(array01[0]);
array01[1] = "world";
const i = 2;
array01[i] = 3;
array01[array01[2]] = array01[0];
/* [ 'hello', 'world', 3, 'hello' ] */
console.log(array01);

export {};
