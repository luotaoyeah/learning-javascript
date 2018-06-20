(function() {
  /*
   * 如果只想用 () 来进行分组，而不能被引用，需要使用 (?:) 的形式；
   */
  console.log("\n-------------------------------------------------- 01");

  const pattern01 = /(\d)(\w)(\d)\2/;
  const pattern02 = /(\d)(?:\w)(\d)\2/;

  /* true */
  console.log(pattern01.test("9x9x"));
  /* false */
  console.log(pattern01.test("9x99"));

  /* false */
  console.log(pattern02.test("9x9x"));
  /* true */
  console.log(pattern02.test("9x99"));
})();
