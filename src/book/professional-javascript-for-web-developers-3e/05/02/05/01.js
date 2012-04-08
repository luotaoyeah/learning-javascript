// reordering-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Array.reverse()` 将数组倒序,
  // 直接修改数据, 并且返回数组

  var arr = [1, 2, 3];
  arr.reverse();
  console.assert(JSON.stringify(arr) === JSON.stringify([3, 2, 1]));
})();
