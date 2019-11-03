(function () {
  /*
   * \b 表示匹配 word boundary；
   */
  console.log('\n-------------------------------------------------- 01');

  const pattern01 = /\sjava\s/;
  const pattern02 = /\bjava\b/;

  /* [ ' java ', index: 3, input: 'the java vm' ] */
  console.log('the java vm'.match(pattern01));
  /* [ 'java', index: 4, input: 'the java vm' ] */
  console.log('the java vm'.match(pattern02));
})();

(function () {
  /*
   * \B 表示匹配非 word boundary；
   */
  console.log('\n-------------------------------------------------- 02');

  const pattern01 = /\BScript/;
  /* true */
  console.log(pattern01.test('JavaScript'));
  /* true */
  console.log(pattern01.test('TypeScript'));
  /* false */
  console.log(pattern01.test('Script'));
})();
