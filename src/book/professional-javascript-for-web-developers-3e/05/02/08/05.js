// iterative-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Array.prototype.some()` 方法,
  // 只要有一个元素满足条件, 就返回 true, 否则返回 false

  var arr = [1, 2, 3, 4, 5];

  console.assert(
    arr.some(function (item) {
      return item % 2 === 0;
    }) === true,
  );

  console.assert(
    arr.some(function (item) {
      return item < 0;
    }) === false,
  );
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 具有短路特性

  var arr = [1, 2, 3, 4, 5];

  var testedElements = [];

  console.assert(
    arr.some(function (item) {
      testedElements.push(item);
      return item % 2 === 0;
    }) === true,
  );

  console.assert(JSON.stringify(testedElements) === JSON.stringify([1, 2]));
})();
