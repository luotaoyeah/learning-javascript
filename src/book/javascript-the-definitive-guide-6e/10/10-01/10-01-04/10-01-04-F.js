(function() {
  /*
   * 分组引用（\n）不能用在 character class 中,
   * 即 [] 中不能出现分组引用（\n）；
   */
  console.log("\n-------------------------------------------------- 01");

  const pattern01 = /(\d)[^\1]/;
  /* true */
  console.log(pattern01.test("99"));
})();
