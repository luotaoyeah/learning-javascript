/*
 * Meta Programming
 *     Revocable Proxy
 *         Reflect
 *             Reflect.has()
 */

console.log("\n-------------------------------------------------- 01");
console.log(Reflect.has({ name: "FOO" }, "name")); // true
console.log(Reflect.has({}, "age")); // false

export {};
