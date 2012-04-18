// queue-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Array.prototype.pop()` 从数组末尾移除元素,
  // `Array.prototype.shift()` 从数组头部移除元素

  var arr = [1, 2, 3];
  console.assert(arr.pop() === 3);
  console.assert(arr.shift() === 1);
})();
