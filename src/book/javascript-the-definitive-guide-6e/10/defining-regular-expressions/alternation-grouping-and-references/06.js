(function () {
  /*
   * `[]` 中的分组引用, 只表示普通字符
   */

  const str = '99';
  console.assert(JSON.stringify(str.match(/(\d)[^\1]/g)) === JSON.stringify(['99']));
})();
