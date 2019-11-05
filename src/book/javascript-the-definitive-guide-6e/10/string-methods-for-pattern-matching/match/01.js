(function () {
  /*
   * String.prototype.match()
   * 返回匹配结果数组
   *
   * 如果没有匹配, 则返回 null,
   * 如果没有设置 g, 则返回结果跟 `RegExp.exec()` 方法返回的结果一样,
   * 如果设置了 g, 则返回所有匹配结果组成的数组
   */

  console.assert('java'.match(/script/) === null);
  console.assert(JSON.stringify('javascript'.match(/javascript/)) === JSON.stringify(/javascript/.exec('javascript')));
  console.assert(JSON.stringify('javascript'.match(/(java)|(script)/g)) === JSON.stringify(['java', 'script']));
})();
