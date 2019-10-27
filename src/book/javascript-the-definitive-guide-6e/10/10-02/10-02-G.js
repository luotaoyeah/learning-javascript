/*
 * String.prototype.split()
 */

(function () {
  console.log('\n-------------------------------------------------- 01');

  /* [ '1', ' 2', '3', ' 4', '5' ] */
  console.log('1, 2,3, 4,5'.split(','));
  /* [ '1', '2', '3', '4', '5' ] */
  console.log('1, 2,3, 4,5'.split(/\s*,\s*/));
})();

(function () {
  console.log('\n-------------------------------------------------- 02');
  /* [ 'http', 'www', 'github', 'com' ] */
  console.log('http://www.github.com'.split(/[^\w]+/));
})();
