/*
 * Meta Programming
 *     Revocable Proxy
 *         Reflect
 *             Reflect.ownKeys()
 */

console.log("\n-------------------------------------------------- 01");
const obj = {
  name: "FOO",
  [Symbol("name")]: "BAR"
};

console.log(Object.keys(obj)); // [ 'name' ]
console.log(Object.getOwnPropertyNames(obj)); // [ 'name' ]
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(name) ]
console.log(Reflect.ownKeys(obj)); // [ 'name', Symbol(name) ]

export {};
