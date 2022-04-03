(function () {
  /*
   * String.prototype.split()
   * 如果参数是一个 regexp 对象, 则将匹配结果作为分隔符号
   *
   */

  console.assert(JSON.stringify('1, 2,3,4 ,5'.split(',')) === JSON.stringify(['1', ' 2', '3', '4 ', '5']));
  console.assert(JSON.stringify('1, 2,3,4 ,5'.split(/ ?, ?/)) === JSON.stringify(['1', '2', '3', '4', '5']));
  console.assert(JSON.stringify('1, 2,3,4 ,5'.split(/\s*,\s*/)) === JSON.stringify(['1', '2', '3', '4', '5']));
})();
