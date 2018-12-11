/*
 * Iterators and Generators
 *     Iteration Protocols
 *         Iterable Protocol
 */

console.log("\n-------------------------------------------------- 01");
/*
 * iteration protocols 包含两个部分：iterable protocol 和 iterator protocol
 * 通过遵循某些约定，任何对象都可以实现这两个 protocol
 */

/*
 * iterable protocol 的内容：
 *     实现 @@iterator 方法，即实现名称为 [Symbol.iterator] 的方法
 *     该方法没有参数，且返回默认的 iterator
 *         即当对象需要被遍历时，就会自动调用该方法获取默认的 iterator
 *
 * 内置类型如 Map，Set，Array 都实现了 [Symbol.iterator] 方法
 */

console.log(Array.prototype[Symbol.iterator]); // [Function: values]
console.log(Set.prototype[Symbol.iterator]); // [Function: values]
console.log(Map.prototype[Symbol.iterator]); // [Function: entries]

/*
 * WeakMap 和 WeakSet 没有实现 [Symbol.iterator] 方法，
 * 它们不能被遍历
 */
console.log(WeakMap.prototype[Symbol.iterator]); // undefined
console.log(WeakSet.prototype[Symbol.iterator]); // undefined

export {};
