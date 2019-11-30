/*
 * 8.1.1 Nested Functions
 */
(function() {
  /*
   * function 可以定义在其他的 function 里面,
   * 这种 function 称为 nested functions 或者 inner function；
   * 在 inner function 中可以访问 outer function 的 parameters 和 variables；
   */
  console.log("\n-------------------------------------------------- 01");

  (function fn01(x, y) {
    const sum = x + y;

    function fn02(a, b) {
      return a * a + b * b + sum;
    }

    /* 4 */
    console.log(fn02(x, y));
  })(1, 1);
})();
