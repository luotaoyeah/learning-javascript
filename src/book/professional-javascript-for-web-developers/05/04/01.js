// the-regexp-type

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 由于 regexp 中有转义字符, string 中也有转义字符,
  // 因此使用 `new RegExp()` 构造函数创建实例时, 转义字符需要再次转义

  // prettier-ignore
  var regExp01 = new RegExp('\[js]');
  console.assert(regExp01.test('j') === true);
  console.assert(regExp01.test('s') === true);

  var regExp02 = new RegExp('\\[js]');
  console.assert(regExp02.test('j') === false);
  console.assert(regExp02.test('s') === false);
})();
