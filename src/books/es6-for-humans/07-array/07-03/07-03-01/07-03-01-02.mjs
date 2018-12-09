/*
 * Arrays and Collections
 *     Map and WeakMap
 *         Map
 *             Checking Keys Equality
 */

console.log("\n-------------------------------------------------- 01");
/*
 * map 中的 key 不能重复，
 * 在比较 key 是否重复时，使用的 same-value 算法，
 * same-value 跟 === 类似，但是会认为 NaN 跟 NaN 是相等的
 */

console.log(Number.NaN === Number.NaN); // false

const map = new Map();
map.set(Number.NaN, "NOT A NUMBER");
console.log(map.get(Number.NaN)); // NOT A NUMBER
