(function () {
  /*
   * 使用 `(?=)` 来声明一个自定义的 boundary,
   * 它也称之为 lookahead group, 它是一个 non-capture group,
   * 它只能匹配右边的边界, 不能匹配左边的边界
   */

  const str = '_1 _2._3-_4\t_5__66_7x_8X';

  console.assert(JSON.stringify(str.match(/_\d\B/g)) === JSON.stringify(['_5', '_6', '_7', '_8']));
  console.assert(JSON.stringify(str.match(/_\d(?=\w)/g)) === JSON.stringify(['_5', '_6', '_7', '_8']));
})();

(function () {
  /*
   * `(?!)` 表示 `(?=)` 的否定
   */

  const str = '_1 _2._3-_4\t_5__66_7x_8X';

  console.assert(JSON.stringify(str.match(/_\d\B/g)) === JSON.stringify(['_5', '_6', '_7', '_8']));
  console.assert(JSON.stringify(str.match(/_\d(?=\w)/g)) === JSON.stringify(['_5', '_6', '_7', '_8']));
  console.assert(JSON.stringify(str.match(/_\d(?!\W)/g)) === JSON.stringify(['_5', '_6', '_7', '_8']));
})();
