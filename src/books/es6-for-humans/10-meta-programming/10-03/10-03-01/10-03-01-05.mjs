/*
 * Meta Programming
 *     Traps in Proxy Handler
 *         ownKeys
 */

console.log("\n-------------------------------------------------- 01");
/*
 * ProxyHandler.ownKeys() 用来拦截下面三个方法：
 *     Object.keys()
 *     Object.getOwnPropertyNames()
 *     Object.getOwnPropertySymbols()
 */

const obj = {
  name: "FOO",
  age: 9,
  [Symbol("name")]: "BAR",
  [Symbol("age")]: 99
};
console.log(Object.keys(obj)); // [ 'name', 'age' ]
console.log(Object.getOwnPropertyNames(obj)); // [ 'name', 'age' ]
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(name), Symbol(age) ]

const proxy = new Proxy(obj, {
  ownKeys() {
    return [];
  }
});
console.log(Object.keys(proxy)); // []
console.log(Object.getOwnPropertyNames(proxy)); // []
console.log(Object.getOwnPropertySymbols(proxy)); // []

export {};
