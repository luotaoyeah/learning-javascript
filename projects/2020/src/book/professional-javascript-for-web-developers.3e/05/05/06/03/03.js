// string-manipulation-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 截取子串有三个方法:
  //   1. `String.prototype.slice(start?: number, end?: number)`
  //   2. `String.prototype.substring(start: number, end?: number)`
  //   3. `String.prototype.substr(from: number, length?: number)`

  var str = 'hello world';
  console.assert(str.slice(4, 7) === 'o w');
  console.assert(str.substring(4, 7) === 'o w');
  console.assert(str.substr(4, 3) === 'o w');
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 当参数是负数时, 它们的行为有区别:
  //
  //   1. `String.prototype.slice(start?: number, end?: number)`
  //        start 负数取模, end 负数取模
  //
  //   2. `String.prototype.substring(start: number, end?: number)`
  //        start 负数取 0, end 负数取 0
  //
  //   3. `String.prototype.substr(from: number, length?: number)`
  //        from 负数取模, length 负数取 0

  var str = 'hello world';

  console.assert(str.slice(-7, -4) === 'o w');
  console.assert(str.substring(-7, -4) === '');
  console.assert(str.substr(-7, -4) === '');
  console.assert(str.substr(-7, 3) === 'o w');
})();
