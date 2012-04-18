// reduction-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Array.prototype.reduceRight()` 方法,
  // 跟 `Array.prototype.reduce()` 的区别: 从后往前遍历

  var intermediateResults = [];

  console.assert(
    [1, 2, 3, 4, 5].reduceRight(function (prev, item, index, array) {
      intermediateResults.push(prev);
      return prev + item;
    }, 0) === 15,
  );

  console.assert(JSON.stringify(intermediateResults) === JSON.stringify([0, 5, 9, 12, 14]));
})();
