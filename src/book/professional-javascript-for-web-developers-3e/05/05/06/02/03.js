// the-number-type

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Number.prototype.toFixed()` 方法, 指定小数位数,
  // 小数位数的范围是: [0, 20]

  // 不足的位用 0 补齐
  console.assert((10).toFixed() === '10');
  console.assert((10).toFixed(2) === '10.00');

  // 多余的位四舍五入
  console.assert((3.1415).toFixed(3) === '3.142');
})();
