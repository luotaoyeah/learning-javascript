/*
 * 10.1.4 Alternation, Grouping and References
 */

(function () {
  /*
   * | 用来分隔多个'备选项', 多个备选项中只要有一个匹配, 就表示匹配成功；
   */
  console.log('\n-------------------------------------------------- 01');
  const pattern01 = /ab|cd|ef/;

  /* [ 'ab', index: 0, input: 'abc' ] */
  console.log('abc'.match(pattern01));
  /* [ 'cd', index: 1, input: 'bcd' ] */
  console.log('bcd'.match(pattern01));
  /* [ 'cd', index: 0, input: 'cde' ] */
  console.log('cde'.match(pattern01));
  /* null */
  console.log('de'.match(pattern01));
})();

(function () {
  console.log('\n-------------------------------------------------- 02');
  const pattern01 = /\d{3}|[a-z]{4}/;

  /* [ '333', index: 6, input: '1a22bb333ccc' ] */
  console.log('1a22bb333ccc'.match(pattern01));
  /* [ 'dddd', index: 9, input: 'a1bb2ccc3dddd4' ] */
  console.log('a1bb2ccc3dddd4'.match(pattern01));
})();
