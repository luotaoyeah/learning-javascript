/*
 * String.prototype.replace()
 */

(function () {
  /*
   * String.prototype.replace()
   * 查找并替换, 如果没设置 g 则只替换第一个匹配结果, 否则替换所有匹配结果,
   * 返回替换后的结果
   */

  console.assert('0123'.replace(/\d/, 'X') === 'X123');
  console.assert('0123'.replace(/\d/g, 'X') === 'XXXX');
})();
