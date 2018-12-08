/*
 * Arrays and Collections
 *     Array.prototype.entries()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * Array.prototype.entries() 方法返回一个迭代器，
 * 该迭代器每次返回的数据为：[index, value]
 */
const arr = ["a", "b", "c"];

const entries = arr.entries();
console.log(entries.next().value); // [ 0, 'a' ]
console.log(entries.next().value); // [ 1, 'b' ]
console.log(entries.next().value); // [ 2, 'c' ]

console.log("\n-------------------------------------------------- 02");
/*
 * 可以使用 for...of 循环遍历迭代器对象
 */

for (let entry of arr.entries()) {
  console.log(entry[0], entry[1]);
}
