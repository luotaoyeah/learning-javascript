// string-location-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `String.prototype.indexOf()` 查找子串所在的索引, 找不到则返回 -1

  var str = 'hello world';
  console.assert(str.indexOf('o') === 4);
  console.assert(str.indexOf('x') === -1);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `String.prototype.lastInexOf()` 从后往前查找

  var str = 'hello world';
  console.assert(str.indexOf('o') === 4);
  console.assert(str.lastIndexOf('o') === 7);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 可以指定开始查找的索引

  var str = 'hello world';

  console.assert(str.indexOf('o') === 4);
  console.assert(str.indexOf('o', 5) === 7);

  console.assert(str.lastIndexOf('o') === 7);
  console.assert(str.lastIndexOf('o', 6) === 4);
})();
