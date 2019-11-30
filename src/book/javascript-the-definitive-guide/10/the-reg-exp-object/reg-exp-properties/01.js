(function () {
  /*
   * `RegExp.source`
   *     只读, 表示当前 regexp 的字符串形式
   */

  const regExpStr = '\\d{3}(?=\\.)';
  const regExp = new RegExp(regExpStr, 'gim');

  console.assert(JSON.stringify('12345.6789'.match(regExp)) === JSON.stringify(['345']));
  console.assert(regExp.source === regExpStr);
})();
