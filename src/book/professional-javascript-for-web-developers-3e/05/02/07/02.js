// location-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Array.lastIndexOf()` 方法,
  // 跟 `Array.indexOf()` 方法的区别: 从后往前查找

  var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
  console.assert(arr.indexOf(3) === 2);
  console.assert(arr.lastIndexOf(3) === 6);
})();
