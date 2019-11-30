/*
 * 7.8.7 Array.prototype.push(), Array.prototype.pop()
 *
 *
 */

(function() {
  /*
   * Array.prototype.push()：
   *     往 array 的末尾插入一个或多个 element, 返回 array 的 length；
   */
  console.log("\n-------------------------------------------------- 01");

  const array01 = [];
  /* 2 */
  console.log(array01.push(1, 2));
  /* [ 1, 2 ] */
  console.log(array01);
})();

(function() {
  /*
   * Array.prototype.pop()：
   *     删除 array 的最后一个 element, 并返回该 element；
   */
  console.log("\n-------------------------------------------------- 02");

  const array01 = [1, 2, 3];
  /* 3 */
  console.log(array01.pop());
  /* [ 1, 2 ] */
  console.log(array01);
})();
