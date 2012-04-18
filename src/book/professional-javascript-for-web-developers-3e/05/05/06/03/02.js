// string-manipulation-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `String.prototype.concat()` 拼接多个字符串

  console.assert('hello'.concat(' world', ' !') === 'hello world !');

  // 一般直接使用 `+` 拼接更加方便
  console.assert('hello' + ' world' + ' !' === 'hello world !');
})();
