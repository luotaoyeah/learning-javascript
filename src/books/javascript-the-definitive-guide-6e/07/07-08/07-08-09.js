/*
 * 7.8.9 Array.prototype.toString()，Array.prototype.toLocaleString()
 *
 */

(function() {
  /*
   * Array.prototype.toString()：
   *     调用每个 element 的 toString() 方法，
   *     将结果用(,)连接成一个 string，
   *     返回该 string；
   */
  console.log("\n-------------------------------------------------- 01");
  const array01 = [1, 2, 3];
  /* 1,2,3 */
  console.log(array01.toString());
})();

(function() {
  /*
   * 如果 element 又是 array，该 array 会被展开，以此类推；
   * 因此可以实现简单 array 的深层展开（deep flatten）；
   */
  console.log("\n-------------------------------------------------- 02");
  const array01 = [1, [2, [3, [4]]]];
  /* 1,2,3,4 */
  console.log(array01.toString());
  /* [ '1', '2', '3', '4' ] */
  console.log(array01.toString().split(","));
})();

(function() {
  /*
   * Array.prototype.toLocaleString() 会调用每个 element 的 toLocaleString() 方法；
   */
  console.log("\n-------------------------------------------------- 03");
  const array01 = [1000, 2000, 3000];
  /* 1000,2000,3000 */
  console.log(array01.toString());
  /* 1,000,2,000,3,000 */
  console.log(array01.toLocaleString());
})();
