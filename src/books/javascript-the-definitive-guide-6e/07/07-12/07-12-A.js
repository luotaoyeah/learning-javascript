/*
 * 7.12 Strings as Arrays
 */

(function() {
  /*
   * string 在某些行为上很像 read-only array；
   * 比如使用 [] 获取某个位置的字符；
   */
  console.log("\n-------------------------------------------------- 01");

  const str01 = "hello world";
  /* false */
  console.log(Array.isArray(str01));
  /* o */
  console.log(str01[4]);
})();
