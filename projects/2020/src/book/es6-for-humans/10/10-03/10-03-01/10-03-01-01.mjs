/*
 * Meta Programming
 *     Traps in Proxy Handler
 *         get()
 */

console.log('\n-------------------------------------------------- 01');
/*
 * proxy 的 handler 对象定义了一组 traps, 包括：
 *     get
 *     set
 *     has
 *     getPrototypeOf
 *     setPrototypeOf
 *     isExtensible
 *     preventExtensions
 *     getOwnPropertyDescriptor
 *     deleteProperty
 *     defineProperty
 *     enumerate
 *     ownKeys
 *     apply
 *     construct
 */

const obj = { num: 2 };

const proxy = new Proxy(obj, {
  get(target, p) {
    if (p in target) {
      if (target[p] > 0) {
        target[p] -= 1;
        return target[p];
      } else {
        return 0;
      }
    } else {
      return undefined;
    }
  },
});

console.log(proxy.num); // 1
console.log(proxy.num); // 0
console.log(proxy.num); // 0
console.log(proxy.foo); // undefined

export {};
