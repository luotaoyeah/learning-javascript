(function() {
  /*
   * polyfill 一个简单的 Function.prototype.bind()；
   */
  console.log("\n-------------------------------------------------- 01");

  const obj01 = { name: "foo" };

  function fn01(age) {
    console.log(this.name, age);
  }

  /**
   *
   * @param obj
   * @param fn
   * @return
   */
  function bind01(obj, fn) {
    return function() {
      return fn.apply(obj, arguments);
    };
  }

  const fn03 = fn01.bind(obj01);
  const fn04 = bind01(obj01, fn01);

  /* foo 9 */
  fn03(9);
  /* foo 18 */
  fn04(18);
})();
