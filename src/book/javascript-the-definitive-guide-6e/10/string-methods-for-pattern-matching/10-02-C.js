/*
 * String.prototype.replace()
 */

(function () {
  /*
   * 接收 2 个参数, 第一个参数为要查找的 pattern, 第二个参数为替换为的字符串；
   * 默认只替换第一个匹配项；
   */
  console.log('\n-------------------------------------------------- 01');

  /* X9x9x9 */
  console.log('x9x9x9'.replace(/x/, 'X'));
})();

(function () {
  /*
   * 支持 /g
   */
  console.log('\n-------------------------------------------------- 02');

  /* X9X9X9 */
  console.log('x9x9x9'.replace(/x/g, 'X'));
})();

(function () {
  /*
   * 如果第一个参数是字符串, 而不是 regular expression, 则直接查找该字符串；
   * 只替换第一个匹配项；
   */
  console.log('\n-------------------------------------------------- 03');

  /* xXx. */
  console.log('x.x.'.replace('.', 'X'));
  /* XXXX */
  console.log('x.x.'.replace(/./g, 'X'));
})();

(function () {
  console.log('\n-------------------------------------------------- 04');
  const pattern01 = /javascript/gi;
  /* JavaScript */
  console.log('javascript'.replace(pattern01, 'JavaScript'));
  /* JavaScript */
  console.log('JAVASCRIPT'.replace(pattern01, 'JavaScript'));
  /* JavaScript */
  console.log('JAVAscript'.replace(pattern01, 'JavaScript'));
})();
