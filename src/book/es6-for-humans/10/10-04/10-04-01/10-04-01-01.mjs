/*
 * Meta Programming
 *     Revocable Proxy
 */

console.log('\n-------------------------------------------------- 01');
/*
 * 使用 Proxy.revocable() 方法, 创建一个 revocable proxy 对象
 * 同时返回一个 revoke() 方法,
 * 当调用 revoke() 方法之后, proxy 对象会被废弃,
 * 后面如果再使用 proxy 对象, 会报错
 */

const obj = { name: 'foo' };
const { proxy, revoke } = Proxy.revocable(obj, {
  get(target, p) {
    const value = target[p];
    if (typeof value === 'string') {
      return value.toUpperCase();
    }

    return value;
  },
});

console.log(proxy.name); // FOO
revoke();
console.log(proxy.name); // TypeError: Cannot perform 'get' on a proxy that has been revoked

export {};
