(function() {
  /*
   * 字符串的几个方法：search(), replace(), match(), split(),
   * 不会使用到 lastIndex 属性, 而是直接将 lastIndex 设置为 0；
   *
   * 使用 exec() 和 test() 方法时, 有时候需要手动重置 lastIndex 为 0,
   * 否则同一个 regular expression 对不同的字符串执行这些方法, 会出现错误的结果；
   */
  console.log("\n-------------------------------------------------- 01");

  const pattern01 = /\d/g;

  /* [ '1', index: 0, input: '1a2b' ] */
  console.log(pattern01.exec("1a2b"));
  /* [ '4', index: 2, input: '3c4d' ] */
  console.log(pattern01.exec("3c4d"));
})();
