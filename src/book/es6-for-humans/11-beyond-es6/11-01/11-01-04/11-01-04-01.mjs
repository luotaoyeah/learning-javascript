/*
 * Beyond ES6
 *     Object.entries(), Object.values()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * ES2017 中新增了 Object.entries() 和 Object.values() 方法
 */

const obj01 = { foo: "FOO" };
const obj02 = { bar: "BAR" };
Reflect.setPrototypeOf(obj02, obj01);

console.log(Object.keys(obj02)); // [ 'bar' ]
console.log(Object.values(obj02)); // [ 'BAR' ]
console.log(Object.entries(obj02)); // [ [ 'bar', 'BAR' ] ]

export {};
