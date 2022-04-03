/*
 * 7.9.2 Array.prototype.map()
 */

(function() {
  /*
   * 返回一个新的 array, 其中的 element 为 function 的返回值；
   */
  console.log("\n-------------------------------------------------- 01");

  const array01 = [1, 2, 3];
  /* [ 1, 4, 9 ] */
  console.log(array01.map(item => item * item));
})();

(function() {
  /*
   * 如果原来的 array 是一个 sparse array, 新的 array 也是一个 sparse array；
   */
  console.log("\n-------------------------------------------------- 02");

  const array01 = [, 1, , 2, , 3];
  /* [ <1 empty item>, 1, <1 empty item>, 2, <1 empty item>, 3 ] */
  console.log(array01);
  /* [ <1 empty item>, 1, <1 empty item>, 4, <1 empty item>, 9 ] */
  console.log(array01.map(item => item * item));
})();
