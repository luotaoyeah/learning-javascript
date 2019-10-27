(function () {
  /*
   * 使用 `[]` 来声明一个 character class / range
   * 表示定义一个字符集合, 只要满足其中某个字符, 就能够被匹配
   */

  const str = '012 abc ABC';

  console.assert(JSON.stringify(str.match(/[012]/g)) === JSON.stringify(['0', '1', '2']));
  console.assert(JSON.stringify(str.match(/[abc]/gi)) === JSON.stringify(['a', 'b', 'c', 'A', 'B', 'C']));
})();

(function () {
  /*
   * `[^abc]` 表示 `[abc]` 的否定
   */

  const str = '012abc';

  console.assert(JSON.stringify(str.match(/[abc]/g)) === JSON.stringify(['a', 'b', 'c']));
  console.assert(JSON.stringify(str.match(/[^abc]/g)) === JSON.stringify(['0', '1', '2']));
})();

(function () {
  /*
   * 可以使用 `-` 来指定字符范围
   */

  const str = '0123 abcd';

  console.assert(JSON.stringify(str.match(/[0-3]/g)) === JSON.stringify(['0', '1', '2', '3']));
  console.assert(JSON.stringify(str.match(/[a-c]/g)) === JSON.stringify(['a', 'b', 'c']));
})();
