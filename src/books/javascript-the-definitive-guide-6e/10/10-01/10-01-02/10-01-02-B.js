/*
 * JS 定义了一些特殊字符和转义字符，用来表示一些常用的 character classes；
 * 称之为 special character-class escapes；
 */

(function() {
  /*
   * [] 匹配方括号中的任意字符；
   */
  console.log("\n-------------------------------------------------- 01");
  var pattern01 = /[a]/;
  /* true */
  console.log(pattern01.test("a"));
  /* false */
  console.log(pattern01.test("b"));
})();

(function() {
  /*
   * [^] 匹配非方括号中的任意字符；
   */
  console.log("\n-------------------------------------------------- 02");
  var pattern01 = /[^a]/;
  /* false */
  console.log(pattern01.test("a"));
  /* true */
  console.log(pattern01.test("b"));
})();

(function() {
  /*
   * . 匹配任意非换行符；
   */
  console.log("\n-------------------------------------------------- 03");
  var pattern01 = /./;
  /* true */
  console.log(pattern01.test(" "));
  /* true */
  console.log(pattern01.test("x"));
  /* false */
  console.log(pattern01.test("\n"));
  /* false */
  console.log(pattern01.test("\r"));
})();

(function() {
  /*
   * \w 等价于 [a-zA-Z0-9_]
   */
  console.log("\n-------------------------------------------------- 04");
  var pattern01 = /\w/;
  /* true */
  console.log(pattern01.test("x"));
  /* true */
  console.log(pattern01.test("X"));
  /* true */
  console.log(pattern01.test("9"));
  /* true */
  console.log(pattern01.test("_"));
  /* false */
  console.log(pattern01.test("-"));
})();

(function() {
  /*
   * \W 等价于 [^a-zA-Z0-9_]
   */
  console.log("\n-------------------------------------------------- 05");
  var pattern01 = /\W/;
  /* false */
  console.log(pattern01.test("x"));
  /* false */
  console.log(pattern01.test("X"));
  /* false */
  console.log(pattern01.test("9"));
  /* false */
  console.log(pattern01.test("_"));
  /* true */
  console.log(pattern01.test("-"));
})();

(function() {
  /*
   * \s 匹配任意空白字符；
   */
  console.log("\n-------------------------------------------------- 06");
  var pattern01 = /\s/;
  /* true */
  console.log(pattern01.test(" "));
  /* true */
  console.log(pattern01.test("  "));
  /* true */
  console.log(pattern01.test("\t"));
  /* true */
  console.log(pattern01.test("\v"));
  /* true */
  console.log(pattern01.test("\f"));
  /* true */
  console.log(pattern01.test("\r"));
  /* true */
  console.log(pattern01.test("\n"));
})();

(function() {
  /*
   * \S 匹配任意非空白字符；
   */
  console.log("\n-------------------------------------------------- 07");
  var pattern01 = /\S/;
  /* false */
  console.log(pattern01.test(" "));
  /* false */
  console.log(pattern01.test("  "));
  /* false */
  console.log(pattern01.test("\t"));
  /* false */
  console.log(pattern01.test("\v"));
  /* false */
  console.log(pattern01.test("\f"));
  /* false */
  console.log(pattern01.test("\r"));
  /* false */
  console.log(pattern01.test("\n"));
})();

(function() {
  /*
   * \d 匹配任意数字，等价于 [0-9]
   */
  console.log("\n-------------------------------------------------- 08");
  var pattern01 = /\d/;
  /* true */
  console.log(pattern01.test("9"));
  /* false */
  console.log(pattern01.test("x"));
})();

(function() {
  /*
   * \D 匹配任意非数字，等价于 [^0-9]
   */
  console.log("\n-------------------------------------------------- 09");
  var pattern01 = /\D/;
  /* false */
  console.log(pattern01.test("9"));
  /* true */
  console.log(pattern01.test("x"));
})();
