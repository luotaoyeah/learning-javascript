/*
 * 疑问：为什么 outer function 已经返回了, 而在其中定义的 variables 还能够被 inner function 访问到？
 * 原因：outer function 在执行的时候, JS 会创建一个新的对象, 称之为'变量绑定对象',
 * 这个对象包含了对本次执行所使用到的 variables 的引用, 同时该对象会被添加到当前的 scope chain；
 * 当 outer function 返回的时候, '变量绑定对象'会从 scope chain 上面移除, 等待垃圾回收；
 * 如果 outer function 中包含了 inner function, 则 inner function 引用了 scope chain,
 * 而 scope chain 又引用了该'变量绑定对象', 所以'变量绑定对象'不会从 scope chain 上面移除；
 * 如果 outer function 在返回的时候, inner function 被返回了出去, 从而赋值给了某个外部的变量,
 * 则虽然 outer function 已经返回了, 但是其本次执行的'变量绑定对象'依然存在；
 */

/*
 * closures 可以用来实现 private variables；
 */

(function() {
  /*
   * 当 outer function 返回之后, 只有 inner function 可以访问变量 counter；
   * 从而实现了 private variables;
   */
  console.log("\n-------------------------------------------------- 01");

  const nextInteger = (function() {
    let counter = 1;
    return function() {
      return counter++;
    };
  })();

  /* 1 */
  console.log(nextInteger());
  /* 2 */
  console.log(nextInteger());
})();

(function() {
  /*
   * 可以在一个 outer function 中定义多个 inner function,
   * 它们可以共享同一个 private variable；
   */
  console.log("\n-------------------------------------------------- 02");

  const nextInteger = (function() {
    let n = 1;

    return {
      next: function() {
        return n++;
      },
      reset: function() {
        n = 1;
      }
    };
  })();

  /* 1 */
  console.log(nextInteger.next());
  /* 2 */
  console.log(nextInteger.next());
  nextInteger.reset();
  /* 1 */
  console.log(nextInteger.next());
})();

(function() {
  /*
   * 因为'变量绑定对象'是在每一次 function 执行的时候都会重新创建一个,
   * 所以如果执行多次 outer function, 每次返回的 inner function 是不会共享同一个 scope chain 的；
   */
  console.log("\n-------------------------------------------------- 03");

  function outer() {
    let n = 1;

    return function() {
      return n++;
    };
  }

  const next01 = outer();
  const next02 = outer();

  /* 1 */
  console.log(next01());
  /* 2 */
  console.log(next01());

  /* 1 */
  console.log(next02());
})();
