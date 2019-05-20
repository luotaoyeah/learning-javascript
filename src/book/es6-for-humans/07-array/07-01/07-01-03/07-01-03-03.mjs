/*
 * Arrays and Collections
 *     Array.prototype.keys()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * Array.prototype.keys() 方法返回一个迭代器,
 * 该迭代器每次返回的数据为：元素索引
 */

const keys = ["a", "b", "c"].keys();

console.log(keys.next().value); // 0
console.log(keys.next().value); // 1
console.log(keys.next().value); // 2
console.log(keys.next().value); // undefined
