/*
 * 10.1.2 Character Classes
 */

/*
 * 可以将 literal character 用 [] 包裹起来，组成 character class；
 */

(function() {
  /*
   * [abc] 表示匹配其中的任意一个字符；
   */
  console.log("\n-------------------------------------------------- 01");
  const pattern01 = /[abc]/;

  /* true */
  console.log(pattern01.test("a"));
  /* true */
  console.log(pattern01.test("b"));
  /* true */
  console.log(pattern01.test("c"));
  /* false */
  console.log(pattern01.test("d"));
})();

(function() {
  /*
   * [^abc] 表示不能匹配其中的任意一个字符；
   */
  console.log("\n-------------------------------------------------- 02");
  const pattern01 = /[^abc]/;

  /* false */
  console.log(pattern01.test("a"));
  /* false */
  console.log(pattern01.test("b"));
  /* false */
  console.log(pattern01.test("c"));
  /* true */
  console.log(pattern01.test("d"));
})();

(function() {
  /*
   * 连字符（hyphen / -）用来指定字符范围；
   */
  console.log("\n-------------------------------------------------- 03");
  const pattern01 = /[a-z]/;
  const pattern02 = /[a-zA-Z0-9]/;

  /* true */
  console.log(pattern01.test("x"));
  /* false */
  console.log(pattern01.test("9"));
  /* false */
  console.log(pattern01.test("X"));

  /* true */
  console.log(pattern02.test("x"));
  /* true */
  console.log(pattern02.test("X"));
  /* true */
  console.log(pattern02.test("9"));
})();
