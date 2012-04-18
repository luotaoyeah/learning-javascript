// the-trim-method

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------

  var str = ' \t\v\fhello world\r\n ';

  // `String.prototype.trim()` 去除首位空格
  console.assert(str.trim() === 'hello world');

  // `String.prototype.trimLeft()` 去除头部空格
  console.assert(str.trimLeft() === 'hello world\r\n ');

  // `String.prototype.trimRight()` 去除尾部空格
  console.assert(str.trimRight() === ' \t\v\fhello world');
})();
