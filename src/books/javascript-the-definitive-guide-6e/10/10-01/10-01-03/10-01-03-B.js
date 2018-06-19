(function() {
  /*
   * {n,m}
   * 表示模式出现的次数为：n <= 次数 <= m
   */
  console.log("\n-------------------------------------------------- 01");

  const pattern01 = /\d{2,4}/;

  /* null */
  console.log("9".match(pattern01));
  /* [ '99', index: 0, input: '99' ] */
  console.log("99".match(pattern01));
  /* [ '999', index: 1, input: 'x999' ] */
  console.log("x999".match(pattern01));
  /* [ '9999', index: 2, input: 'xx9999' ] */
  console.log("xx9999".match(pattern01));
  /* [ '9999', index: 3, input: 'xxx99999' ] */
  console.log("xxx99999".match(pattern01));
})();
