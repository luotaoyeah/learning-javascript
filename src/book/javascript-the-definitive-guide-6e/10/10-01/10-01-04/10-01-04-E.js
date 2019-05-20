(function() {
  /*
   * 使用 \n 来引用当前 pattern 中的某个分组；
   * 如果多个分组嵌套, 则 n 表示从左往右第 n 个左括号；
   */
  console.log("\n-------------------------------------------------- 01");

  const pattern01 = /(java([Ss]cript))\s\2/;

  /* true */
  console.log(pattern01.test("javascript script"));
  /* false */
  console.log(pattern01.test("javascript Script"));
})();

(function() {
  console.log("\n-------------------------------------------------- 02");

  const pattern01 = /['"][^'"]*['"]/;
  const pattern02 = /(['"])[^'"]*\1/;

  /* true */
  console.log(pattern01.test("'x\""));
  /* true */
  console.log(pattern01.test("'x'"));
  /* true */
  console.log(pattern01.test('"x"'));

  /* false */
  console.log(pattern02.test("'x\""));
  /* true */
  console.log(pattern02.test("'x'"));
  /* true */
  console.log(pattern02.test('"x"'));
})();
