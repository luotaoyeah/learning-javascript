// iterative-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Array.prototype.filter()` 方法,
  // 返回满足条件的元素组成的新数组

  var arr = [1, 2, 3, 4, 5];
  console.assert(
    JSON.stringify(
      arr.filter(function (item) {
        return item % 2 === 0;
      }),
    ) === JSON.stringify([2, 4]),
  );
})();
