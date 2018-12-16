/*
 * Meta Programming
 *     Revocable Proxy
 *         Reflect
 */

console.log("\n-------------------------------------------------- 01");
/*
 * Reflect 是 ES6 新增的一个全局对象，提供了一系列静态方法，
 * 这些方法用来实现 meta-programming 中的 introspection
 * Reflect 中的方法与 ProxyHandler 中的方法是一一对应的
 *     Reflect.apply()
 *     Reflect.construct()
 *     Reflect.defineProperty()
 *     Reflect.deleteProperty()
 *     Reflect.get()
 *     Reflect.getOwnPropertyDescriptor()
 *     Reflect.getPrototypeOf()
 *     Reflect.has()
 *     Reflect.isExtensible()
 *     Reflect.ownKeys()
 *     Reflect.preventExtensions()
 *     Reflect.set()
 *     Reflect.setPrototypeOf()
 *     Reflect.enumerate()
 */

console.log(Reflect.get({ name: "FOO" }, "name")); // FOO

console.log("\n-------------------------------------------------- 02");
/*
 * Reflect 的目标对象必须是 object 类型或者 Function 类型
 * 其他类型的对象会报错
 */
Reflect.get(9, "name"); // TypeError: Reflect.get called on non-object

export {};
