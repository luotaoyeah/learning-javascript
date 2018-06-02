(function() {
  /*
   * 通常可以定义一个匿名的 function，并在定义之后立即执行该 function，
   * 称之为 IIFE（Immediately Invoked Function Expression）（立即执行函数）；
   *
   * function definition 需要使用括号括起来，
   * 这样 JS 会将其作为 function definition expression 来解析，
   * 否则会将其作为 function declaration statement 来解析；
   */
  console.log("\n-------------------------------------------------- 01");

  (function() {
    console.log("IIFE");
  })();
})();
