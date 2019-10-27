/*
 * 10.3 The RegExp Object
 */

(function () {
  /*
   * RegExp() 作为 constructor 接收 2 个参数；
   *     第一个参数表示该 regular expression 的字符串形式,
   *     第二个参数表示 flag, 必须为 g,i,m 的组合；
   */
  console.log('\n-------------------------------------------------- 01');
  const pattern01 = new RegExp('[0-9]', 'g');

  /* [ '2', '0', '1', '8', '0', '6', '2', '2', '1', '6', '5', '7', '3', '8' ] */
  console.log('2018-06-22 16:57:38'.match(pattern01));
})();

(function () {
  /*
   * 如果该 regular expressioin 中包含转义字符,
   * 则 \ 需要再次转义, 即写为：\\
   */
  console.log('\n-------------------------------------------------- 02');
  const pattern01 = new RegExp('\\d', 'g');

  /* [ '2', '0', '1', '8', '0', '6', '2', '2', '1', '6', '5', '7', '3', '8' ] */
  console.log('2018-06-22 16:57:38'.match(pattern01));
})();
