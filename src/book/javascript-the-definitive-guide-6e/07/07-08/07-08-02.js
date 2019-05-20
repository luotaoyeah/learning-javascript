/*
 * 7.8.2 Array.prototype.reverse()
 */

(function() {
  /*
   * 反转一个 array 的 element, 并返回反转后的 array；
   * 原来的 array 会被修改, 不会创建新的 array；
   */
  console.log("\n-------------------------------------------------- 01");

  const array01 = [1, 2, 3];
  /* true */
  console.log(array01.reverse() === array01);
  /* [ 3, 2, 1 ] */
  console.log(array01);
})();
