/*
 * 10.1.3 Repetition
 */

(function() {
  "use strict";

  /*
   * 仅使用 literal character 表示固定数量的数字；
   */
  console.log("\n-------------------------------------------------- 01");

  const pattern01 = /\d\d/;
  /* false */
  console.log(pattern01.test("9"));
  /* true */
  console.log(pattern01.test("99"));
  /* true */
  console.log(pattern01.test("999"));

  const pattern02 = /\d\d\d/;
  /* false */
  console.log(pattern02.test("9"));
  /* false */
  console.log(pattern02.test("99"));
  /* true */
  console.log(pattern02.test("999"));
})();
