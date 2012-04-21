// the-from-char-code-method

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `String.fromCharCode()` 静态方法, 将多个字符编码转换成一个字符串

  var str = 'js';

  console.assert(String.fromCharCode(str.charCodeAt(0) - 32, str.charCodeAt(1) - 32) === 'JS');
})();
