// increment-decrement

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // ++/-- 也可以用于 boolean/string/object 类型的变量,
  // 会首先使用 `Number()` 函数将值转换为 number 类型, 再进行自增/自减

  var x = '1';
  console.assert(++x === 2);

  var y = '1f';
  console.assert(Number.isNaN(y++));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  var x = true;
  console.assert(++x === 2);

  var y = false;
  console.assert(--y === -1);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  var x = {};
  console.assert(Number.isNaN(x++));

  var y = {
    valueOf: function () {
      return 1;
    },
  };
  console.assert(++y === 2);

  var z = {
    toString: function () {
      return 1;
    },
  };
  console.assert(++z === 2);
})();
