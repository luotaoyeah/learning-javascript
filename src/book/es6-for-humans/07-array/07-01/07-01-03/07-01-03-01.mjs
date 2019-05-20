/*
 * Arrays and Collections
 *     Array.prototype.entries()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 所有可迭代的对象, 都会实现一个 [Symbol.iterator] 方法,
 * 该方法的返回值就是该对象的一个迭代器
 */

const iterator = [1, 2, 3][Symbol.iterator]();
/*
 * 调用 next() 方法, 返回下一个元素,
 * 其中 value 表示元素值, done 表示是否遍历完毕
 */
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
