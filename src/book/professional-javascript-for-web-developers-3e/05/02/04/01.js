// queue-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Array.push()` 往数组末尾添加元素,
  // `Array.unshift()` 往数组头部添加元素

  var arr = [1, 2, 3];
  console.assert(arr.unshift(0) === 4);
  console.assert(JSON.stringify(arr) === JSON.stringify([0, 1, 2, 3]));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Array.pop()` 从数组末尾移除元素,
  // `Array.shift()` 从数组头部移除元素

  var arr = [1, 2, 3];
  console.assert(arr.pop() === 3);
  console.assert(arr.shift() === 1);
})();
