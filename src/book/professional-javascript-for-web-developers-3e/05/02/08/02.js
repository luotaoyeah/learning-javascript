// iterative-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Array.map()` 方法,
  // 映射数组元素, 返回新的数组

  var arr = [1, 2, 3];
  console.assert(
    JSON.stringify(
      arr.map(function (item) {
        return item * item;
      }),
    ) === JSON.stringify([1, 4, 9]),
  );
})();
