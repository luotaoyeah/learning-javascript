// character-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `String.prototype.charAt()` 方法, 返回索引位置的字符
  var str = 'hello world';

  console.assert(str.charAt(6) === 'w');

  // 超过索引范围时, 结果为 ""
  console.assert(str.charAt(-1) === '');
  console.assert(str.charAt(99) === '');
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `String.prototype.charCodeAt()` 方法, 返回索引位置的字符的 unicode 编码

  console.assert('A'.charCodeAt(0) === 65);
  console.assert('a'.charCodeAt(0) === 97);

  // 超过索引范围时, 结果为 `Number.NaN`
  console.assert(Number.isNaN(''.charCodeAt(0)));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 可以直接使用 bracket notation 的形式访问某个索引位置的字符

  var str = 'hello world';
  console.assert(str[0] === 'h');
  console.assert(str[6] === 'w');

  // 超过索引范围时, 结果为 `undefined`
  console.assert(str[-1] === undefined);
  console.assert(str[99] === undefined);
})();
