/*
 * String.prototype.match()
 */

/*
 * 查找并返回匹配项；
 */

(function() {
  /*
   * 如果没有匹配项，返回 null；
   */
  console.log("\n-------------------------------------------------- 01");

  /* null */
  console.log("javascript".match(/\d/));
})();

(function() {
  /*
   * 支持 /g 返回所有匹配项组成的数组；
   */
  console.log("\n-------------------------------------------------- 02");

  /* [ '2', '0', '1', '8', '0', '6', '2', '2', '1', '6', '2', '4', '3', '2' ] */
  console.log("2018-06-22 16:24:32".match(/\d/g));
})();

(function() {
  /*
   * 如果没有指定 /g，则返回的数组中，第一个元素为第一个匹配项，
   * 其他元素依次为'分组匹配项'；
   */
  console.log("\n-------------------------------------------------- 03");

  /* ["javascript","java","script"] */
  console.log(JSON.stringify("javascript is great".match(/(java)(script)/)));
})();
