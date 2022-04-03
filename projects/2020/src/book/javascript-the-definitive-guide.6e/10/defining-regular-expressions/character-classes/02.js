/*
 * 除了可以使用 `[]` 来自定义 character class / range 之外,
 * regexp 还内置了很多常用的 character class
 */

(function () {
  /*
   * `.` 匹配任意单个字符(除了换行符号 `\r` `\n`)
   */

  const str = '0aB-_ \n\r\t.';

  console.assert(JSON.stringify(str.match(/./g)) === JSON.stringify(['0', 'a', 'B', '-', '_', ' ', '\t', '.']));
})();

(function () {
  /*
   * `\w` 等价于 `[_0-9a-zA-Z]`,
   * 其中的 w 表示 word
   */

  const str = '_0xX -.\r\n\t';

  console.assert(JSON.stringify(str.match(/\w/g)) === JSON.stringify(['_', '0', 'x', 'X']));
  console.assert(JSON.stringify(str.match(/[_0-9a-zA-Z]/g)) === JSON.stringify(['_', '0', 'x', 'X']));
})();

(function () {
  /*
   * `\W` 表示 `\w` 的否定,
   * \W 等价于 [^_0-9a-zA-Z]
   */

  const str = '_0xX -.\n\t';

  console.assert(JSON.stringify(str.match(/\w/g)) === JSON.stringify(['_', '0', 'x', 'X']));
  console.assert(JSON.stringify(str.match(/\W/g)) === JSON.stringify([' ', '-', '.', '\n', '\t']));
})();

(function () {
  /*
   * `\s` 匹配任意空白字符, 等价于 `[ \r\n\t\v\f]`
   * 其中的 s 表示 space
   */

  const str = ' \r\n\t\v\f';

  console.assert(JSON.stringify(str.match(/\s/g)) === JSON.stringify([' ', '\r', '\n', '\t', '\v', '\f']));
})();

(function () {
  /*
   * `\S` 表示 `\s` 的否定
   */

  const str = ' \r\n\t\v\f_-.0x';

  console.assert(JSON.stringify(str.match(/\s/g)) === JSON.stringify([' ', '\r', '\n', '\t', '\v', '\f']));
  console.assert(JSON.stringify(str.match(/\S/g)) === JSON.stringify(['_', '-', '.', '0', 'x']));
})();

(function () {
  /*
   * `\d` 匹配任意数字, 等价于 `[0-9]`,
   * 其中的 d 表示 digit
   */

  const str = '012abc';

  console.assert(JSON.stringify(str.match(/\d/g)) === JSON.stringify(['0', '1', '2']));
})();

(function () {
  /*
   * `\D` 表示 `\d` 的否定, 等价于 `[^0-9]`
   */

  const str = '012abc';

  console.assert(JSON.stringify(str.match(/\d/g)) === JSON.stringify(['0', '1', '2']));
  console.assert(JSON.stringify(str.match(/\D/g)) === JSON.stringify(['a', 'b', 'c']));
})();
