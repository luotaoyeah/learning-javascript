// reordering-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Array.concat()` 方法,
  // 将参数添加到数组末尾, 返回新的数组

  var arr01 = [1, 2];
  var arr02 = arr01.concat(3, 4);

  console.assert(JSON.stringify(arr01) === JSON.stringify([1, 2]));
  console.assert(JSON.stringify(arr02) === JSON.stringify([1, 2, 3, 4]));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如果参数是一个 array, 则它会被平化一层

  var arr01 = [1, 2];
  var arr02 = arr01.concat(3, [4, [5, [6]]], [7]);
  console.assert(JSON.stringify(arr02) === JSON.stringify([1, 2, 3, 4, [5, [6]], 7]));
})();
