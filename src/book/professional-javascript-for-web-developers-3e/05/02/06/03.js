// manipulation-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Array.prototype.splice()` 方法, 先删除一些元素, 再插入一些元素, 最后返回被删除的元素数组,
  // 数组会被修改

  var arr01 = [1, 2, 3, 4, 5];

  var deleted = arr01.splice(0, 2);
  console.assert(JSON.stringify(deleted) === JSON.stringify([1, 2]));
  console.assert(JSON.stringify(arr01) === JSON.stringify([3, 4, 5]));

  deleted = arr01.splice(0, 0, 1, 2);
  console.assert(JSON.stringify(deleted) === JSON.stringify([]));
  console.assert(JSON.stringify(arr01) === JSON.stringify([1, 2, 3, 4, 5]));

  deleted = arr01.splice(1, 2, 9, 9, 9);
  console.assert(JSON.stringify(deleted) === JSON.stringify([2, 3]));
  console.assert(JSON.stringify(arr01) === JSON.stringify([1, 9, 9, 9, 4, 5]));
})();
