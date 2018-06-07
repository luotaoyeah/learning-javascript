/*
 * 8.8.3 Partial Application of Functions
 */

(function() {
  /*
   * Function.prototype.bind() 可是实现 partial application，
   * 但是其绑定的参数是从左边开始绑定；
   */
  console.log("\n-------------------------------------------------- 01");
  function fn01(x, y, z) {
    return x + y - z;
  }

  /* 0 */
  console.log(fn01.bind(null, 1, 2)(3));
})();
