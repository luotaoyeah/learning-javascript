(function () {
  /*
   * +
   * 表示模式出现的次数为：1 <= 次数
   */
  console.log('\n-------------------------------------------------- 01');

  const pattern01 = /x\d+/;

  /* null */
  console.log('x'.match(pattern01));
  /* [ 'x9', index: 0, input: 'x9x' ] */
  console.log('x9x'.match(pattern01));
  /* [ 'x99', index: 0, input: 'x99x' ] */
  console.log('x99x'.match(pattern01));
  /* [ 'x99', index: 1, input: 'xx99xx' ] */
  console.log('xx99xx'.match(pattern01));
})();

(function () {
  /*
   * + 等价于 {1,}
   */
  console.log('\n-------------------------------------------------- 02');

  const pattern01 = /x\d{1,}/;

  /* null */
  console.log('x'.match(pattern01));
  /* [ 'x9', index: 0, input: 'x9x' ] */
  console.log('x9x'.match(pattern01));
  /* [ 'x99', index: 0, input: 'x99x' ] */
  console.log('x99x'.match(pattern01));
  /* [ 'x99', index: 1, input: 'xx99xx' ] */
  console.log('xx99xx'.match(pattern01));
})();
