// manipulation-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Array.slice()` 方法, 截取数组的一部分, 返回新的数组, 数组不会修改,
  // 可以指定开始索引和结束索引, 默认为 [0,length),
  // 结束索引位置的元素不会被包括

  var arr01 = [1, 2, 3, 4, 5];
  console.assert(JSON.stringify(arr01.slice()) === JSON.stringify([1, 2, 3, 4, 5]));
  console.assert(JSON.stringify(arr01.slice(1)) === JSON.stringify([2, 3, 4, 5]));
  console.assert(JSON.stringify(arr01.slice(undefined, 2)) === JSON.stringify([1, 2]));
  console.assert(JSON.stringify(arr01.slice(1, 2)) === JSON.stringify([2]));

  // 如果结束索引 >= 开始索引, 则返回空数组
  console.assert(JSON.stringify(arr01.slice(1, 1)) === JSON.stringify([]));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如果索引为负数, 则索引会被取模变成正数

  var arr01 = [1, 2, 3, 4, 5];

  console.assert(JSON.stringify(arr01.slice(-4, -2)) === JSON.stringify(arr01.slice(1, 3)));
})();
