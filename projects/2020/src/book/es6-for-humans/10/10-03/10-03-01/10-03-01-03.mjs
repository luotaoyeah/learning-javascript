/*
 * Meta Programming
 *     Traps in Proxy Handler
 *         has()
 */

console.log('\n-------------------------------------------------- 01');
/*
 * ProxyHandler.has() 用来拦截 in 操作符
 */

const obj = {
  name: 'FOO',
  age: 99,
};
const proxy = new Proxy(obj, {
  has(target, p) {
    if (p === 'age') {
      return false;
    }

    return p in target;
  },
});

console.log('name' in proxy); // true
console.log('age' in proxy); // false

export {};
