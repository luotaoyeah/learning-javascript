/*
 * 8.2.4 Indirect Invocation
 */

/*
 * functin 也是 object, 也有 method,
 * 其中 Function.prototype.call() 和 Function.prototype.apply() 用来间接调用某个函数；
 */

(function() {
  /*
   * Function.prototype.call() 可以指定要在哪个 object 上调用某个函数,
   * 即指定 method invocation 中函数体中的 this；
   */
  console.log("\n-------------------------------------------------- 01");

  function fn01() {
    console.log(this.name);
  }

  const obj01 = { name: "tom" };

  /* tom */
  fn01.call(obj01);
})();

(function() {
  /*
   * Function.prototype.call() 可以指定 method invocation 时的参数；
   */
  console.log("\n-------------------------------------------------- 02");

  function fn01(x, y) {
    console.log(this.name, x + y);
  }

  const obj01 = { name: "tom" };

  /* tom 2 */
  fn01.call(obj01, 1, 1);
})();

(function() {
  /*
   * Function.prototype.call() 和 Function.prototype.apply() 的区别：
   *     Function.prototype.apply() 的参数以 array 的形式传递
   */
  console.log("\n-------------------------------------------------- 03");

  function fn01(x, y) {
    console.log(this.name, x + y);
  }

  const obj01 = { name: "tom" };

  /* tom 2 */
  fn01.call(obj01, 1, 1);
  /* tom 2 */
  fn01.apply(obj01, [1, 1]);
})();
