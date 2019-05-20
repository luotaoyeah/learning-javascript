/*
 * String.prototype.search()
 */
(function() {
  /*
   * 接收一个 regular expression 参数, 返回第一个匹配项的开始索引,
   * 如果没有匹配项, 返回 -1；
   */
  console.log("\n-------------------------------------------------- 01");

  /* 1 */
  console.log("x9x9x9".search(/9/));
  /* -1 */
  console.log("x9x9x9".search(/99/));
})();

(function() {
  /*
   * 如果参数不是 regular expression 对象, 会调用 RegExp() 进行转换；
   */
  console.log("\n-------------------------------------------------- 02");

  /* 0 */
  console.log("x9x9x9".search("x"));
})();

(function() {
  /*
   * 不支持 /g 全局搜索, 会忽略参数中的 /g
   */
  console.log("\n-------------------------------------------------- 02");

  /* 0 */
  console.log("x9x9x9".search(/x/g));
})();
