/*
 * 8.2.1 Function Invocation
 */

(function() {
  /*
   * 在 strict mode 下，function declaration statement 中的 this 为 undefined；
   */
  console.log("\n-------------------------------------------------- 01");

  (function() {
    console.log(this);
  })();
})();
