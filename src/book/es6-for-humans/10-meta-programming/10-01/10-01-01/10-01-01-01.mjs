/*
 * Meta Programming
 *     Meta Programming in ES5 and ES6 Overview
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 元编程（meta-programming）表示对程序本身进行编程,
 * 在 ES5 中, Object 上的静态方法都属于元编程的范畴
 */

const foo = {};
const bar = {};
Object.setPrototypeOf(foo, bar);
console.log(bar.isPrototypeOf(foo)); // true

console.log("\n-------------------------------------------------- 02");
/*
 * meta-programming 有三种形式：
 *     introspection（自省）
 *         Object.prototype.isPrototypeOf()
 *         instanceof
 *         typeof
 *     self-modification（自我修改）
 *         Reflection
 *         Object.defineProperty()
 *     intercession
 *         Proxy
 */

export {};
