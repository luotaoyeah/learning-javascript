/*
 * 8.3.2 Variable-Length Argument Lists: The Arguments Object
 */

(function() {
  /*
   * 如果调用 function 时传入的参数多余定义时的参数数量，
   * 则传入的多余的参数无法直接访问，需要使用 arguments 对象；
   * arguments 是一个 Array-Like 对象，每一个属性表示一个参数，length 属性表示参数的个数；
   */
  console.log("\n-------------------------------------------------- 01");

  (function fn01(x) {
    /* x y */
    console.log(x, arguments[1]);
    /* 3 */
    console.log(arguments.length);
  })("x", "y", "x");
})();

(function() {
  /*
   * JS 对于函数参数的默认行为为：
   *     a. 对于少传的参数，其值为 undefined；
   *     b. 对于多传的参数，会被忽略；
   */
  console.log("\n-------------------------------------------------- 02");

  function fn01(x, y) {
    console.log(x, y);
  }

  /* x y */
  fn01("x", "y", "z");
  /* x undefined */
  fn01("x");
})();
