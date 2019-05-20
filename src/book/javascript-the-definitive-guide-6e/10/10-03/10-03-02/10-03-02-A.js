/*
 * 10.3.2  RegExp Methods
 */

/*
 * RegExp.prototype.exec()
 * RegExp.prototype.test()
 */

(function() {
  /*
   * RegExp.prototype.exec() 类似 String.prototype.match()
   */
  console.log("\n-------------------------------------------------- 01");

  /* [ '2', index: 0, input: '2018-06-21 21:32:22' ] */
  console.log(/\d/.exec("2018-06-21 21:32:22"));
  /* [ 'javascript', 'java', 'script', index: 0, input: 'javascript' ] */
  console.log(/(java)(script)/.exec("javascript"));
})();

(function() {
  /*
   * 当使用 /g 时, RegExp.prototype.exec() 和 String.prototype.match() 的区别在于：
   * exec() 始终返回第一个匹配项, 而不是所有的匹配项；
   * 同时将 lastIndex 设置为当前匹配项的结束索引的下一个索引位置；
   */
  console.log("\n-------------------------------------------------- 02");

  /* [ 'a', 'a' ] */
  console.log("javascript".match(/a/g));

  const pattern02 = /a/g;
  /* [ 'a', index: 1, input: 'javascript' ] */
  console.log(pattern02.exec("javascript"));
  /* 2 */
  console.log(pattern02.lastIndex);
})();

(function() {
  /*
   * 当同一个 regular expression 第二次调用 exec() 时,
   * 会从 lastIndex 开始查找；
   */
  console.log("\n-------------------------------------------------- 03");
  const pattern01 = /a/g;
  /* [ 'a', index: 1, input: 'javascript' ] */
  console.log(pattern01.exec("javascript"));
  /* [ 'a', index: 3, input: 'javascript' ] */
  console.log(pattern01.exec("javascript"));
  /* 4 */
  console.log(pattern01.lastIndex);
})();
