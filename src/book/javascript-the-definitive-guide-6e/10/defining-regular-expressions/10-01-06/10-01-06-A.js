/*
 * 10.1.6 Flags
 */

(function () {
  /*
   * JS 中的 regular expression 支持 3 中'标识元素'：
   *     i    case-insensitive    大小写不敏感
   *     g    global              全局搜索
   *     m    multiline           多行模式
   *
   * '标识元素'需要跟在第二个 / 的后面；
   */
  console.log('\n-------------------------------------------------- 01');

  const pattern01 = /java/;
  const pattern02 = /java/i;

  /* true */
  console.log(pattern01.test('java'));
  /* false */
  console.log(pattern01.test('JAVA'));
  /* true */
  console.log(pattern02.test('java'));
  /* true */
  console.log(pattern02.test('JAVA'));
})();
