/*
 * 7.8.8 Array.prototype.unshift()，Array.prototype.shift()
 *
 */

(function() {
  /*
   * Array.prototype.unshift()：
   *     往 array 的开头插入一个或多个 element，返回 array 的 length；
   */
  console.log("\n-------------------------------------------------- 01");

  const array01 = [1, 2];
  /* 3 */
  console.log(array01.unshift(3));
  /* [ 3, 1, 2 ] */
  console.log(array01);
})();

(function() {
  /*
   * Array.prototype.unshift() 插入多个 elements 时，
   *     element 在 array 中的顺序保持不变；
   */
  console.log("\n-------------------------------------------------- 02");

  const array01 = [1];
  /* 3 */
  console.log(array01.unshift(2, 3));
  /* [ 2, 3, 1 ] */
  console.log(array01);
})();

(function() {
  /*
   * Array.prototype.shift()：
   *     删除 array 的第一个 element，并返回该 element；
   */
  console.log("\n-------------------------------------------------- 03");

  const array01 = [1, 2, 3, 4];
  /* 1 */
  console.log(array01.shift());
  /* [ 2, 3, 4 ] */
  console.log(array01);
})();
