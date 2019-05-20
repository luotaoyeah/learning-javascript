(function() {
  /*
   * () 用来对 pattern 中的 characters 进行分组时,
   * 还有另外一个特性：该分组匹配到的目标字符串, 可以在 pattern 中的其他地方引用到；
   * 使用 \n 的方式来引用前面的某个分组, 其中 n 表示要引用第几个分组, 从 1 开始；
   */
  console.log("\n-------------------------------------------------- 01");

  const pattern01 = /\dx\d/;
  const pattern02 = /(\d)x\1/;

  /* true */
  console.log(pattern01.test("0x9"));
  /* true */
  console.log(pattern01.test("0x0"));
  /* false */
  console.log(pattern02.test("0x9"));
  /* true */
  console.log(pattern02.test("0x0"));
})();

(function() {
  console.log("\n-------------------------------------------------- 02");

  const pattern01 = /[abc]\d[abc]/;
  const pattern02 = /([abc])\d\1/;

  /* true */
  console.log(pattern01.test("a9a"));
  /* true */
  console.log(pattern01.test("a9c"));
  /* true */
  console.log(pattern02.test("a9a"));
  /* false */
  console.log(pattern02.test("a9c"));
})();
