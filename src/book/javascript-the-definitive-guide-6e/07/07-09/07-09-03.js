/*
 * 7.9.3 Array.prototype.filter()
 */

(function() {
  /*
   * 过滤 array 的 element, 返回一个新的 array；
   * 对于回调函数, 返回值为 true 的 element 会包含在返回的 array 中；
   */
  console.log("\n-------------------------------------------------- 01");
  const array01 = [1, 2, 3, 4, 5];
  /* [ 1, 2, 3 ] */
  console.log(array01.filter(item => item < 4));
  /* [ 2, 4 ] */
  console.log(array01.filter(item => item % 2 === 0));
})();

(function() {
  /*
   * 如果原来的 array 是 sparse array, 返回的 array 中, non-existent element 会被过滤掉；
   * 即返回的 array 肯定是一个 dense array；
   */
  console.log("\n-------------------------------------------------- 01");
  /* [ 1, 2, 3 ] */
  console.log([, 1, , 2, , 3].filter(() => true));
})();
