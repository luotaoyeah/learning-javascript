(function() {
  /*
   * {n,}
   * 表示模式出现的次数为：n <= 次数
   */
  console.log("\n-------------------------------------------------- 01");

  const pattern01 = /\d{2,}/;

  /* null */
  console.log("9".match(pattern01));
  /* [ '99', index: 0, input: '99' ] */
  console.log("99".match(pattern01));
  /* [ '999', index: 1, input: 'x999x' ] */
  console.log("x999x".match(pattern01));
  /* [ '9999', index: 2, input: 'xx9999xx' ] */
  console.log("xx9999xx".match(pattern01));
  /* [ '99999', index: 3, input: 'xxx99999xxx' ] */
  console.log("xxx99999xxx".match(pattern01));
})();
