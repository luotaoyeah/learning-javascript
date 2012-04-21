// the-min-and-max-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------

  // `Math.min()` 方法, 返回最小值
  console.assert(Math.min(1, 2, 3, 4, 5) === 1);

  // `Math.max()` 方法, 返回最大值
  console.assert(Math.max(1, 2, 3, 4, 5) === 5);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  //查找数组中的最大值/最小值

  var arr = [1, 2, 3, 4, 5];
  console.assert(Math.min.apply(Math, arr) === 1);
  console.assert(Math.max.apply(Math, arr) === 5);
})();
