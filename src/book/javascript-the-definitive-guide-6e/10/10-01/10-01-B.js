(function() {
  /*
   * 使用 regular expression literal 时, 每次解析都会返回一个新的 RegExp 对象；
   * regular expression 模式中的字符, 有些直接是进行字面上的匹配,
   * 比如所有的数字和字母；
   * 有些字符具有特殊的含义, 比如 $ 表示'结尾'；
   */
  console.log("\n-------------------------------------------------- 01");

  const pattern01 = /java/;
  const pattern = /s$/;
})();
