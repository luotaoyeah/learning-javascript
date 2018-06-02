/*
 * 8.3.1 Optional Parameters
 */

(function() {
  /*
   * 如果调用 function 时传入的 arguments 的数量比定义 function 时定义的 parameters 的数量少，
   * 则未传入的 parameters 的值为 undefined；
   */
  console.log("\n-------------------------------------------------- 01");

  (function fn01(x, y) {
    /* x undefined */
    console.log(x, y);
  })("x");
})();

(function() {
  /*
   * 如果某个 parameter 是可选的，通常我们需要在 function 中判断并设置它的默认值；
   */
  console.log("\n-------------------------------------------------- 02");

  (function fn01(x, /* optional */ y) {
    if (y === undefined) {
      y = "y";
    }

    /* x y */
    console.log(x, y);
  })("x");
})();

(function() {
  /*
   * 如果某个 parameter 是可选的，通常我们需要在 function 中判断并设置它的默认值；
   * 除了使用 if 语句判断之外，也可以使用 || 操作符简化操作；
   */
  console.log("\n-------------------------------------------------- 03");

  (function fn01(x, /* optional */ y) {
    y = y || "y";

    /* x y */
    console.log(x, y);
  })("x");
})();
