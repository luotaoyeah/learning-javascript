/*
 * 8.7.4 The bind() Method
 */

(function() {
  /*
   * Function.prototype.bind()：
   *     将一个 function 绑定到一个 object，返回一个新的 function；
   *     新的 function 中的 this 为绑定的 object；
   */
  console.log("\n-------------------------------------------------- 01");

  const obj01 = { name: "foo" };

  function fn01() {
    console.log(this.name);
  }

  const fn02 = fn01.bind(obj01);

  /* foo */
  fn02();
  /* undefined */
  fn01();
})();
