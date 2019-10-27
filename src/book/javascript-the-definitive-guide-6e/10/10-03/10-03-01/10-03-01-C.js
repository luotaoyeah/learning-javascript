(function () {
  /*
   * RegExp.prototype.lastIndex
   * 对于指定了 /g 的 regular expression, lastIndex 表示下一次开始搜索的索引；
   */
  console.log('\n-------------------------------------------------- 01');
  const pattern01 = /\d/g;
  /* true */
  console.log(pattern01.test('123 js'));

  pattern01.lastIndex = 3;
  /* false */
  console.log(pattern01.test('123 js'));
})();
