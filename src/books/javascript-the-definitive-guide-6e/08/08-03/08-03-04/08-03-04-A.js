/*
 * 8.3.4 Argument Types
 */

/*
 * function parameters 是不能声明类型的，默认也不会进行类型检查；
 * 通常可以在注释中指明参数的类型，已经参数是否是可选的；
 */

(function() {
  /*
   * 在 JS 中，必要的时候会自动进行隐式的类型转换，
   * 所以如果期望一个 function parameter 是 string 类型，但是传入的是其他类型的参数，
   * 则该参数会自动转换为 string 类型；
   */
  console.log("\n-------------------------------------------------- 01");

  (function fn01(x) {
    /* x: 9 */
    console.log("x: " + x);
  })(9);
})();
