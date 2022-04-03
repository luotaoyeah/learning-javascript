// string-case-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `String.prototype.toLowerCase()` 全部转换成小写字母,
  // `String.prototype.toUpperCase()` 全部转换成大写字母

  var str = 'Hello World';
  console.assert(str.toLowerCase() === 'hello world');
  console.assert(str.toUpperCase() === 'HELLO WORLD');
})();
