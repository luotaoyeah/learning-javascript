(function() {
  /*
   * optional parameter 必须放在 parameters list 的最后，
   * 不能放在其他必传参数的前面；
   * 否则无法省略这个 optional parameter，除非显式地传递 undefined；
   */
  console.log("\n-------------------------------------------------- 01");

  (function fn01(/* optional */ x, y) {
    x = x || "x";

    /* x y */
    console.log(x, y);
  })(undefined, "y");
})();
