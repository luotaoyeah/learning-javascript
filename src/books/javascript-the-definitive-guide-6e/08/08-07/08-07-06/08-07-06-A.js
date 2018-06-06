/*
 * 8.7.6 The Function() Constructor
 */

(function() {
  /*
   * 通常我们使用 function 关键字来声明一个 function，
   * 要么使用 function definition expression，要么使用 function declaration statement；
   */
  console.log("\n-------------------------------------------------- 01");
  console.log(
    (function fn01(x, y) {
      return x + y;
    })(9, 9)
  );

  const fn02 = function(x, y) {
    return x + y;
  };
  console.log(fn02(9, 9));
})();

(function() {
  /*
   * 也可以使用 Function() constructor 来创建一个新的 function object；
   * 该 constructor 的所有参数都是 string 类型，
   * 其中，最后一个参数表示方法体，其他参数表示该 function 的参数；
   * 方法体中的 statement 使用 semicolon 分隔；
   */
  console.log("\n-------------------------------------------------- 02");
  /* 18 */
  console.log(new Function("x", "y", "return x + y;")(9, 9));
})();
