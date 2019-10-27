/*
 * RegExp.prototype.test()
 */

(function () {
  /*
   * test() 的执行机制跟 exec() 一样,
   * 区别在于, 如果匹配成功, test() 会返回 true, 否则返回 false；
   */
  console.log('\n-------------------------------------------------- 01');
  const pattern01 = /\d/g;

  /* true */
  console.log(pattern01.test('1a2b3c'));
  /* 1 */
  console.log(pattern01.lastIndex);

  /* true */
  console.log(pattern01.test('1a2b3c'));
  /* 3 */
  console.log(pattern01.lastIndex);

  /* true */
  console.log(pattern01.test('1a2b3c'));
  /* 5 */
  console.log(pattern01.lastIndex);

  /* false */
  console.log(pattern01.test('1a2b3c'));
  /* 0 */
  console.log(pattern01.lastIndex);
})();
