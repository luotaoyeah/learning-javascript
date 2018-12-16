/*
 * Meta Programming
 *     Traps in Proxy Handler
 *         set()
 */

console.log("\n-------------------------------------------------- 01");

const obj = {};
const proxy = new Proxy(obj, {
  set(target, p, value) {
    if (typeof value === "string") {
      target[p] = value.toUpperCase();
    } else if (typeof value === "number") {
      target[p] = value.toFixed(2);
    } else {
      target[p] = value;
    }

    return true;
  }
});

proxy.foo = "foo";
proxy.bar = 9;
console.log(obj); // { foo: 'FOO', bar: '9.00' }

export {};
