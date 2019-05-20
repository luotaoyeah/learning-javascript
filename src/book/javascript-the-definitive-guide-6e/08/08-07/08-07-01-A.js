/*
 * 8.7.1 The length Property
 */

(function() {
  /*
   * arguments.length 表示实参的个数；
   * function 的 length 表示形参的个数；
   */
  console.log("\n-------------------------------------------------- 01");

  (function fn01(x, y, z) {
    /* 1 */
    console.log(arguments.length);
    /* 3 */
    console.log(fn01.length);
  })("x");
})();

(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 02");

  function check(args) {
    if (args.length !== args.callee.length) {
      throw new Error(
        "expected " + args.callee.length + ", got " + args.length
      );
    }
  }

  (function(x, y, z) {
    /* Error: expected 3, got 1 */
    check(arguments);
  })("x");
})();
