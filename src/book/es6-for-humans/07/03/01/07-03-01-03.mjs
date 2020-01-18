/*
 * Arrays and Collections
 *     Map and WeakMap
 *         Map
 */

console.log('\n-------------------------------------------------- 01');
/*
 * 可以使用键值对数组（Iterable<[K, V]>）来初始化
 */
const map = new Map([
  [1, 'A'],
  [2, 'B'],
  [3, 'C'],
]);
console.log(map.get(2)); // B
