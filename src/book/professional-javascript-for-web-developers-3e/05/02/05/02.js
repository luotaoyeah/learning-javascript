// reordering-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Array.sort()` 默认按照字符编码排序, 即使元素都是 number 类型

  var arr = [1, 2, 10, 20];
  arr.sort();
  console.assert(JSON.stringify(arr) === JSON.stringify([1, 10, 2, 20]));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Array.sort()` 可以接收一个比较方法, 方法接收两个参数(记为 x 和 y),
  //   1. 如果结果 < 0, 则 x 排在 y 前面
  //   2. 如果结果 = 0, 则 x 和 y 的顺序不变
  //   3. 如果结果 > 0, 则 x 排在 y 后面

  var arr = [1, 20, 10, 2];

  console.assert(JSON.stringify(arr.sort()) === JSON.stringify([1, 10, 2, 20]));

  console.assert(
    JSON.stringify(
      arr.sort(function (x, y) {
        if (x < y) {
          return -1;
        } else if (x === y) {
          return 0;
        }
        return 1;
      }),
    ) === JSON.stringify([1, 2, 10, 20]),
  );

  console.assert(
    JSON.stringify(
      arr.sort(function (x, y) {
        return x - y;
      }),
    ) === JSON.stringify([1, 2, 10, 20]),
  );
})();
