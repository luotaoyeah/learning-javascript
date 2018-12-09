/*
 * Arrays and Collections
 *     Map and WeakMap
 *         Map
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 可以直接使用 for...of 遍历
 */
const map = new Map([[1, "A"], [2, "B"], [3, "C"]]);
for (const [k, v] of map) {
  console.log(k, v);
}

console.log("\n-------------------------------------------------- 02");
/*
 * 跟 array 一样，可以使用 entries()，keys()，values() 方法，
 * 分别获取各个迭代器
 */
console.log(map.entries().next().value); // [ 1, 'A' ]
console.log(map.keys().next().value); // 1
console.log(map.values().next().value); // A
