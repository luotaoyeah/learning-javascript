// iterative-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Array.forEach()` 方法,
  // 遍历数组

  var arr = [{ x: 1 }, { x: 2 }, { x: 3 }];
  arr.forEach(function (item, index, array) {
    item.x *= 2;
  });

  console.assert(JSON.stringify(arr) === JSON.stringify([{ x: 2 }, { x: 4 }, { x: 6 }]));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 可以绑定遍历函数的 this 对象

  var arr = [{ x: 1 }, { x: 2 }, { x: 3 }];
  var _this = { value: 2 };

  arr.forEach(function (item) {
    item.x *= this.value;
  }, _this);

  console.assert(JSON.stringify(arr) === JSON.stringify([{ x: 2 }, { x: 4 }, { x: 6 }]));
})();
