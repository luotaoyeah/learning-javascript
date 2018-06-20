/*
 * 10.1.5 Specifying Match Position
 */

(function() {
  /*
   * 在一个 regular expression 中，有些元素用来匹配一个字符，比如 \d 匹配一个数字，
   * 有些元素用来匹配一个位置，比如 \b 匹配一个单词边界（word boundary）；
   * word boundary 一般是指一个 \w 和 \W 之间的位置；
   */
  console.log("\n-------------------------------------------------- 01");

  const pattern01 = /\bjavascript\b/;

  /* false */
  console.log(pattern01.test("xjavascriptx"));
  /* true */
  console.log(pattern01.test("-javascript-"));
})();
