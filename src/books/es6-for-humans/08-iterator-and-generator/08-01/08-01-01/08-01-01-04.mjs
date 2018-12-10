/*
 * Iterators and Generators
 *     Iterables and Iterators
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 某些内置的类型实现了 iteration protocol
 * 且除了默认的 iterator 之外，还提供了其他的方法，
 * 用于获取其他形式的 iterator，如 Map 的 keys()，values()，entries()
 */

const map = new Map([[1, "a"], [2, "b"]]);

const keyIterator = map.keys();
console.log(keyIterator.next()); // { value: 1, done: false }
console.log(keyIterator.next()); // { value: 2, done: false }

const valueIterator = map.values();
console.log(valueIterator.next()); // { value: 'a', done: false }
console.log(valueIterator.next()); // { value: 'b', done: false }

export {};
