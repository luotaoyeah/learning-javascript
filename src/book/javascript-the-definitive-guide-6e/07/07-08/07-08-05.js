/*
 * 7.8.5 Array.prototype.slice()
 *
 * 截取 array 的一部分；
 */

(function() {
  /*
   * 第一个参数指定从哪个 index 开始截取,
   * 第二个参数指定截取到哪个 index 为止,
   * result array 中不包括第二个参数所在的 element（左闭右开）；
   */
  console.log("\n-------------------------------------------------- 01");

  /* [ 2 ] */
  console.log([1, 2, 3, 4, 5].slice(1, 2));
})();

(function() {
  /*
   * 如果参数是负数, 表示相对于最后一个 element 的索引, 如：
   *     -1 表示最后一个 element 所在的 index,
   *     -2 表示倒数第二个 element 所在的 index,
   *     以此类推；
   */
  console.log("\n-------------------------------------------------- 02");

  /* [ 2 ] */
  console.log([1, 2, 3, 4, 5].slice(1, -3));
})();

(function() {
  /*
   * 如果未指定第二个参数, 表示截取到 array 最后一个 element（包括最后一个 element）；
   */
  console.log("\n-------------------------------------------------- 03");

  /* [ 2, 3, 4, 5 ] */
  console.log([1, 2, 3, 4, 5].slice(1));
})();
