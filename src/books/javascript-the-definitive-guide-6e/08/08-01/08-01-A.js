/*
 * 8.1 Defining Functions
 */

/*
 * 函数定义有两种方式：
 *     a. function definition expression；
 *     b. function declaration statement；
 */

(function() {
  /*
   * 函数定义包含一下部分：
   *     a. function 关键字；
   *     b. 函数名（对于 function definition expression，函数名可以省略）；
   *     c. 参数列表（一对圆括号包裹，参数之间使用逗号分隔）；
   *     d. 函数体(一对花括号包裹)；
   */
  console.log("\n-------------------------------------------------- 01");

  /* function definition expression */
  const fn01 = function fn00() {
    console.log("fn01");
  };
  fn01();

  /* function declaration statement */
  function fn02() {
    console.log("fn02");
  }

  fn02();
})();
