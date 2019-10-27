/*
 * special character-class escapes 可以用在 [] 中；
 */

(function () {
  /*
   *
   */
  console.log('\n-------------------------------------------------- 01');
  var pattern01 = /[\s\d]/;
  /* true */
  console.log(pattern01.test('\r'));
  /* true */
  console.log(pattern01.test('9'));
})();
