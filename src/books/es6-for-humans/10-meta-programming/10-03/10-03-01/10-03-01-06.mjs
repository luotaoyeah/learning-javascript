/*
 * Meta Programming
 *     Traps in Proxy Handler
 *         getOwnPropertyDescriptor()
 */

console.log("\n-------------------------------------------------- 01");
/*
 * ProxyHandler.getOwnPropertyDescriptor() 用来拦截：
 *     Object.getOwnPropertyDescriptor()
 */

const obj = { name: "FOO" };
const proxy = new Proxy(obj, {
  getOwnPropertyDescriptor(target, p) {
    const descriptor = Object.getOwnPropertyDescriptor(target, p);

    descriptor.writable = false;

    return descriptor;
  }
});

console.log(Object.getOwnPropertyDescriptor(proxy, "name").writable); // false
proxy.name = "BAR"; // TypeError: Cannot redefine property: name

export {};
