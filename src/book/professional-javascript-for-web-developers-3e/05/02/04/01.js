// queue-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Array.prototype.push()` 往数组末尾添加元素,
  // `Array.prototype.unshift()` 往数组头部添加元素

  var arr = [1, 2, 3];
  console.assert(arr.unshift(0) === 4);
  console.assert(JSON.stringify(arr) === JSON.stringify([0, 1, 2, 3]));
})();
