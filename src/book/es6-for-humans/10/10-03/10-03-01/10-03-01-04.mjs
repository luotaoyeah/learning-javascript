/*
 * Meta Programming
 *     Traps in Proxy Handler
 *         has()
 */

console.log('\n-------------------------------------------------- 01');
/*
 * ProxyHandler.has() 只能拦截 in 操作符,
 * 即,
 *     如果对于某个属性, has() 返回了 false,
 *     则该属性使用 in 操作符的结果为 false
 * 但是使用 for/in 循环依然可以遍历该属性
 */

const obj = { name: 'FOO', age: 99 };
const proxy = new Proxy(obj, {
  has(target, p) {
    if (p === 'age') {
      return false;
    }

    return p in target;
  },
});

console.log('age' in proxy); // false

/*
 * 使用 for/in 循环可以遍历出 age 属性
 */
for (const p in obj) {
  console.log(p);
}

export {};
