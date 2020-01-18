/*
 * Meta Programming
 *     Proxies in ES6
 */

console.log('\n-------------------------------------------------- 01');
/*
 * Proxy 属于 meta-proramming 中的 intercession（调解）
 * 用来拦截和修改程序的默认行为
 */

/*
 * 使用 Proxy() 构造函数创建新的 proxy 对象,
 * 第一个参数表示要被代理的对象,
 * 第二个参数用来定义拦截行为
 *     第二个参数的每一个属性, 称之为一个 trap
 */

const proxy = new Proxy(
  { name: 'foo' },
  {
    get(target, key) {
      const value = target[key];

      if (typeof value === 'string') {
        return value.toUpperCase();
      }

      return value;
    },
  },
);

console.log(proxy.name); // FOO

export {};
