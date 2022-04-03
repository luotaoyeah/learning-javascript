/*
 * 7.8.3 Array.prototype.sort()
 */

(function() {
  /*
   * 默认按照字符顺序排序；
   */
  console.log("\n-------------------------------------------------- 01");

  const array01 = ["B", "C", "A"];
  /* [ 'A', 'B', 'C' ] */
  console.log(array01.sort());
})();

(function() {
  /*
   * 所有值为 undefined 的 element 会被排在最后；
   */
  console.log("\n-------------------------------------------------- 02");

  const array01 = [undefined, "B", undefined, "C", "A"];
  /* [ 'A', 'B', 'C', undefined, undefined ] */
  console.log(array01.sort());
})();

(function() {
  /*
   * 会修改原来的 array, 不会创建新的 array；
   */
  console.log("\n-------------------------------------------------- 03");

  const array01 = ["B", "C", "A"];
  /* true */
  console.log(array01.sort() === array01);
})();
