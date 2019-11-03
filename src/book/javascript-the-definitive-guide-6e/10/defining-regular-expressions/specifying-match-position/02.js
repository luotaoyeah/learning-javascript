(function () {
  /*
   * `\b` 表示匹配 word boundary,
   * 实际匹配的字符集为 `\W`
   */

  const str = '_1 _2._3-_4\t_5__66_7x_8X';

  console.assert(JSON.stringify(str.match(/_\d\b/g)) === JSON.stringify(['_1', '_2', '_3', '_4']));
})();

(function () {
  /*
   * `\B` 表示 `\b` 的否定
   */

  const str = '_1 _2._3-_4\t_5__66_7x_8X';

  console.assert(JSON.stringify(str.match(/_\d\B/g)) === JSON.stringify(['_5', '_6', '_7', '_8']));
})();
