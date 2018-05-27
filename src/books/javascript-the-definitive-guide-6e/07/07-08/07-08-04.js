/*
 * 7.8.4 Array.prototype.concat()
 * 连接多个 array 的 element 或者 value；
 */

(function() {
  /*
   * 如果参数也是 array，则其 element 会被拼接到 result array 中，
   *     如果其 element 还是 array，该 element 不会再被展开，直接作为一个整体拼接到 result array 中；
   * 如果参数是 value，则 value 本身会被拼接到 result array 中；
   *
   * 原来的 array 不会被修改，返回新的 array；
   */
  console.log("\n-------------------------------------------------- 01");

  const array01 = [1];
  /* [ 1, 2, 3, [ 4 ] ] */
  console.log(array01.concat(2, [3, [4]]));
  /* [ 1 ] */
  console.log(array01);
})();
