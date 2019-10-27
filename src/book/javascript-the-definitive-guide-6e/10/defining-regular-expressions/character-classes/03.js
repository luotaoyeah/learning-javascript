(function () {
  /*
   * `\w` `\d` `\s` 等等可以跟 `[]` 一起使用
   */

  const str = '012abc _-.';

  console.assert(JSON.stringify(str.match(/[\dab\-\s]/g)) === JSON.stringify(['0', '1', '2', 'a', 'b', ' ', '-']));
})();

(function () {
  /*
   * `.` 在 `[]` 中没有特殊含义, 表示普通的点字符
   */

  const str = ' _-.';

  console.assert(JSON.stringify(str.match(/[._]/g)) === JSON.stringify(['_', '.']));
  console.assert(JSON.stringify(str.match(/._/g)) === JSON.stringify([' _']));
})();
