(function() {
  /*
   * 第二个参数表示从哪个索引开始查找；
   */
  console.log("\n-------------------------------------------------- 01");
  const array01 = [1, 2, 3, 2, 1];
  /* 0 */
  console.log(array01.indexOf(1));
  /* 4 */
  console.log(array01.indexOf(1, 1));
})();

(function() {
  /*
   * 第二个参数如果为负数，表示相对于最后一个 element 的索引，如：
   *     -1 表示最后一个 element，
   *     -2 表示倒数第二个 element，
   *     以此类推；
   */
  console.log("\n-------------------------------------------------- 01");
  const array01 = [1, 2, 3, 2, 1];
  /* 0 */
  console.log(array01.indexOf(1));
  /* 0 */
  console.log(array01.indexOf(1, -5));
})();
