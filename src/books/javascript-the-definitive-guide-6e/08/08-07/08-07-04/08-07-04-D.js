(function() {
  /*
   * Function.prototype.bind() 的特性：
   *     新的 functin 的 length 属性会更新为：原来的 length 减去绑定的 parameters 的个数；
   */
  console.log("\n-------------------------------------------------- 01");

  function fn01(x, y) {
    return x + y;
  }

  /* 2 */
  console.log(fn01.length);
  /* 1 */
  console.log(fn01.bind(null, 9).length);
})();

(function() {
  /*
   * Function.prototype.bind() 的特性：
   *     新的 functin 没有 prototype 属性；
   */
  console.log("\n-------------------------------------------------- 02");

  function fn01(x, y) {
    return x + y;
  }

  /* undefined */
  console.log(fn01.bind(null, 9).prototype);
})();
