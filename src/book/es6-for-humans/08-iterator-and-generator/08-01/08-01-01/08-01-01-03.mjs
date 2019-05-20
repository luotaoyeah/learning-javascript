/*
 * Iterators and Generators
 *     Iterables and Iterators
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 可以使用 @@symbol 的形式, 来表示一个 well-known symbol
 * 比如使用 @@iterator 表示 [Symbol.iterator] 属性对应的值
 */

const arr01 = [1, 2, 3];
const iterator01 = arr01[Symbol.iterator]();

console.log(iterator01.next()); // { value: 1, done: false }
console.log(iterator01.next()); // { value: 2, done: false }
console.log(iterator01.next()); // { value: 3, done: false }
console.log(iterator01.next()); // { value: undefined, done: true }

console.log("\n-------------------------------------------------- 02");
const str01 = "ES6";
const iterator02 = str01[Symbol.iterator]();
console.log(iterator02.next()); // { value: 'E', done: false }
console.log(iterator02.next()); // { value: 'S', done: false }
console.log(iterator02.next()); // { value: '6', done: false }

export {};
