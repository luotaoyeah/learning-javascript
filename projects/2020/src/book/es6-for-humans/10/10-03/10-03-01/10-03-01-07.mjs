/*
 * Meta Programming
 *     Traps in Proxy Handler
 *         apply()
 */

console.log('\n-------------------------------------------------- 01');
/*
 * ProxyHandler.apply() 用来拦截函数调用
 */

function doSomething(name) {
  return name + 'BAR';
}

const proxy = new Proxy(doSomething, {
  /*
   * target 表示函数对象
   * thisArg 表示 this 对象
   * argArray 表示参数列表
   */
  apply(target, thisArg, argArray) {
    if (typeof argArray[0] === 'string') {
      argArray[0] = argArray[0].toUpperCase();
    }

    return target.apply(thisArg, argArray);
  },
});

console.log(proxy('foo')); // FOOBAR

export {};
