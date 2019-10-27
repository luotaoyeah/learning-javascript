/*
 * 10.1.3 Repetition
 */

(function () {
  /*
   * 仅使用 literal character 表示固定数量的数字；
   */
  console.log('\n-------------------------------------------------- 01');

  const pattern01 = /\d\d/;
  /* false */
  console.log(pattern01.test('9'));
  /* true */
  console.log(pattern01.test('99'));
  /* true */
  console.log(pattern01.test('999'));

  const pattern02 = /\d\d\d/;
  /* false */
  console.log(pattern02.test('9'));
  /* false */
  console.log(pattern02.test('99'));
  /* true */
  console.log(pattern02.test('999'));
})();

(function () {
  /*
   * JS 定义了一些常用的表达式, 用来匹配某个模式出现的次数；
   * 这些表达式需要紧跟在要匹配的模式的后面；
   *     {n,m}       n <= 次数 <= m
   *     {n,}         n <= 次数
   *     {n}          n == 次数
   *     ?            0 == 次数 || 1 == 次数, 等价于：{0,1}
   *     +            1 <= 次数, 等价于：{1,}
   *     *            0 <= 次数, 等价于：{0,}
   */
  console.log('\n-------------------------------------------------- 02');
})();
