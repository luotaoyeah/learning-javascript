// the-number-type

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Number.prototype.toExponential()` 方法, 指定小数位数, 并表示成指数形式,
  // 结果中的整数部分是一位非零数字

  console.assert((10).toExponential() === '1e+1');
  // 不足的位用 0 补齐
  console.assert((10).toExponential(2) === '1.00e+1');
  // 多余的位四舍五入
  console.assert((3.1415).toExponential(3) === '3.142e+0');
  console.assert((31415).toExponential(3) === '3.142e+4');
})();
