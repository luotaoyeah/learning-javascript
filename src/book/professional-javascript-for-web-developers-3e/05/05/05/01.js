// function-properties-and-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Function.prototype.length` 属性, 表示形参个数

  console.assert(function () {}.length === 0);
  console.assert(function (x) {}.length === 1);
  console.assert(function (x, y) {}.length === 2);
})();
