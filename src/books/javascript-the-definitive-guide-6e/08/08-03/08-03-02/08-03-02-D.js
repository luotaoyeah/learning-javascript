(function() {
  /*
   * arguments 具有两个属性 callee 和 caller，分别表示：
   *     callee：当前函数对象；
   *     caller：调用当前函数的函数对象；
   */
  console.log("\n-------------------------------------------------- 01");

  (function fn01() {
    /* [Function: fn01] */
    console.log(arguments.callee);
    /* undefined */
    console.log(arguments.caller);
  })();
})();
