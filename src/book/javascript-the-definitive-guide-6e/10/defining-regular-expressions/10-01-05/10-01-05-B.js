(function () {
  /*
   * ^ 表示匹配字符串的开始；
   */
  console.log('\n-------------------------------------------------- 01');

  const pattern01 = /javascript/;
  const pattern02 = /^javascript/;

  /* true */
  console.log(pattern01.test('javascript'));
  /* true */
  console.log(pattern01.test('+javascript+'));
  /* true */
  console.log(pattern02.test('javascript'));
  /* false */
  console.log(pattern02.test('+javascript+'));
})();

(function () {
  /*
   * $ 表示匹配字符串的结束；
   */
  console.log('\n-------------------------------------------------- 02hd');

  const pattern01 = /javascript/;
  const pattern02 = /javascript$/;

  /* true */
  console.log(pattern01.test('javascript'));
  /* true */
  console.log(pattern01.test('+javascript+'));
  /* true */
  console.log(pattern02.test('javascript'));
  /* false */
  console.log(pattern02.test('+javascript+'));
})();
