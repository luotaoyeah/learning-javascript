/*
 * 7.9.6 Array.prototype.indexOf()，Array.prototype.lastIndexOf()
 */

(function() {
  /*
   * Array.prototype.indexOf()
   *     在 array 中从左往右查找指定的值，返回找到的第一个 element 所在的索引；
   *     如果没找到，则返回 -1；
   */
  console.log("\n-------------------------------------------------- 01");
  const array01 = [1, 2, 3, 2, 1];
  /* 0 */
  console.log(array01.indexOf(1));
  /* -1 */
  console.log(array01.indexOf(4));
})();

(function() {
  /*
   * Array.prototype.lastIndexOf()
   *     在 array 中从右往左查找指定的值，返回找到的第一个 element 所在的索引；
   *     如果没找到，则返回 -1；
   */
  console.log("\n-------------------------------------------------- 02");
  const array01 = [1, 2, 3, 2, 1];
  /* 4 */
  console.log(array01.lastIndexOf(1));
  /* -1 */
  console.log(array01.indexOf(4));
})();
