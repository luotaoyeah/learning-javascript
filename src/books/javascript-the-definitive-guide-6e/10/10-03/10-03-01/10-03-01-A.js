/*
 * 10.3.1  RegExp Properties
 */

(function() {
  /*
   * RegExp.prototype.source
   *     只读，表示当前 regular expression 的字符串形式；
   */
  console.log("\n-------------------------------------------------- 01");
  /* \d{3}? */
  console.log(/\d{3}?/.source);
})();
