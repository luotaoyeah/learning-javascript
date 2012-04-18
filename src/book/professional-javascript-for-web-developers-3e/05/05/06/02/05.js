// the-number-type

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Number.prototype.toPrecision()` 方法, 指定有效位数(整数部分和小数部分的总位数),
  // 结果可能是小数形式, 也可能是指数形式,
  // 如果是指数形式, 指数部分不会算入有效位数

  console.assert((99).toPrecision() === '99');
  console.assert((99).toPrecision(1) === '1e+2');
  console.assert((99).toPrecision(2) === '99');
  console.assert((99).toPrecision(3) === '99.0');

  console.assert((3.1415).toPrecision(3) === '3.14');
  console.assert((3.1415).toPrecision(4) === '3.142');
})();
