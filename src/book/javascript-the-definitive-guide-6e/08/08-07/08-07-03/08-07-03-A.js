/*
 * 8.7.3 The call() and apply() Methods
 */

(function() {
  /*
   * call() 和 apply() 用来间接地在某个 object 上执行某个 function；
   * 第一个参数表示该 object, 该 object 会作为该 function 中的 this；
   */
  console.log("\n-------------------------------------------------- 01");

  const obj01 = { name: "foo" };
  const obj02 = { name: "bar" };

  function fn01() {
    console.log(this.name);
  }

  /* foo */
  fn01.call(obj01);
  /* bar */
  fn01.apply(obj02);
})();
