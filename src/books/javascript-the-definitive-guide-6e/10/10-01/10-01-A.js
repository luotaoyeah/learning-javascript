/*
 * 10.1 Defining Regular Expression
 */

(function() {
  /*
   * JS 中 regular expression 是 RegExp 类的实例对象，
   * 可以使用 new RegExp() 的方式来创建一个新的 regular expression 对象；
   */
  console.log("\n-------------------------------------------------- 01");

  const str01 = new String("foo");
  const pattern01 = new RegExp("s$");
})();

(function() {
  /*
   * 类似字符串可以使用 string literal （用 "" 包裹）来创建，
   * regular expression 也可以使用 regular expression literal （用 // 包裹）来创建；
   */
  console.log("\n-------------------------------------------------- 02");

  const str02 = "foo";
  const pattern01 = /s$/;
})();
