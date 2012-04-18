// the-number-type

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Number.prototype.toString()` 方法, 可以指定进制

  var num01 = new Number(10);
  console.assert(num01.toString() === '10');
  console.assert(num01.toString(2) === '1010');
  console.assert(num01.toString(8) === '12');
  console.assert(num01.toString(16) === 'a');
})();
