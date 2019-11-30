(function () {
  /*
   * String.prototype.search()
   * 返回第一个匹配结果的开始索引, 如果没有匹配, 则返回 -1
   */

  console.assert('java\nscript'.search(/^script/) === -1);
  console.assert('java\nscript'.search(/^script/m) === 5);
})();
