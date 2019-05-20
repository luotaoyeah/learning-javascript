(function() {
  /*
   * (?!) 是 (?=) 的相反, 也表示一个 anchor condition,
   * 表示必须不匹配该 condition, 且不会包含在最终的结果中；
   */
  console.log("\n-------------------------------------------------- 01");

  const pattern01 = /java(?!script)/;

  /* false */
  console.log(pattern01.test("javascript"));
  /* true */
  console.log(pattern01.test("javascrip"));
  /* true */
  console.log(pattern01.test("java"));
})();
