/*
 * 9.5.4 Duck-Typing
 */

(function() {
  /*
   * duck-typing：
   *     如果有一只鸟，走路像一只鸭子，游泳像一只鸭子，叫起来像一只鸭子，
   *     那么我们就认为它是一只鸭子；
   */
  console.log("\n-------------------------------------------------- 01");

  const obj01 = {
    walk() {},
    swim() {},
    quack() {}
  };

  const obj02 = {
    walk() {},
    swim() {},
    quack() {}
  };

  /* 从 duck-typing 的角度来看，obj01 和 obj02 属于相同的 type */
})();
