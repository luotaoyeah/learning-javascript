// the-number-type

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Number.prototype.valueOf()` 方法, 返回原始类型的值

  var num01 = new Number(9);
  console.assert(num01.valueOf() === 9);
})();
