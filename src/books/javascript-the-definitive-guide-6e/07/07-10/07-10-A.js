/*
 * 7.10 Array Type
 */

(function() {
  /*
   * Array.isArray()
   *     判断某个对象是否是 array；
   */
  console.log("\n-------------------------------------------------- 01");

  /* true */
  console.log(Array.isArray([]));
  /* false */
  console.log(Array.isArray({}));
})();

(function() {
  /*
   * 不能使用 typeof 来判断某个对象是否是 array，
   * 因为对于除了 function 之外的所有对象，typeof 的结果都是 "object"；
   */
  console.log("\n-------------------------------------------------- 02");

  /* object */
  console.log(typeof []);
  /* object */
  console.log(typeof {});
  /* function */
  console.log(typeof (() => {}));
})();
