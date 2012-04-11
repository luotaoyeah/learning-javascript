// reduction-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Array.reduce()` 方法,
  // 遍历数组, 返回一个单值结果

  // 可以指定初始结果

  var intermediateResults = [];

  console.assert(
    [1, 2, 3, 4, 5].reduce(function (prev, item, index, array) {
      // prev 的值是上次的结果
      intermediateResults.push(prev);
      return prev + item;
    }, 0) === 15,
  );

  console.assert(JSON.stringify(intermediateResults) === JSON.stringify([0, 1, 3, 6, 10]));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如果没有指定初始结果, 则从第二个元素开始遍历

  var intermediateResults = [];

  console.assert(
    [1, 2, 3, 4, 5].reduce(function (prev, item, index, array) {
      intermediateResults.push(prev);
      return prev + item;
    }) === 15,
  );

  console.assert(JSON.stringify(intermediateResults) === JSON.stringify([1, 3, 6, 10]));
})();
