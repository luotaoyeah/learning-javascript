(function () {
  /*
   * 默认情况, 每个规则匹配的都是单个字符, 如 `[abcd]` 表示匹配 "a" 或者 "b" 或者 "c" 或者 "d",
   * 如何让某个规则匹配多个字符? 使用 `|` 符号, 如 `ab|cd` 表示匹配 "ab" 或者 "cd"
   */

  const str = 'abcd';

  console.assert(JSON.stringify(str.match(/[abcd]/g)) === JSON.stringify(['a', 'b', 'c', 'd']));
  console.assert(JSON.stringify(str.match(/ab|cd/g)) === JSON.stringify(['ab', 'cd']));
})();

(function () {
  /*
   * `|` 分隔的多个元素, 会从左往右依次匹配, 只要能够匹配就会停止
   */

  const str = '1 22';

  console.assert(JSON.stringify(str.match(/\d|\d{2}/g)) === JSON.stringify(['1', '2', '2']));
})();

(function () {
  /*
   * `|` 在 `[]` 中只是一个普通字符
   */

  const str = 'abcd';

  console.assert(JSON.stringify(str.match(/[ab|cd]/g)) === JSON.stringify(['a', 'b', 'c', 'd']));
})();
