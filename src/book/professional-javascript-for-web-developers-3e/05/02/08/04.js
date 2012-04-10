// iterative-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Array.every()` 方法,
  // 如果所有元素都满足条件, 则返回 true, 否则返回 false

  var arr = [1, 2, 3, 4, 5];

  console.assert(
    arr.every(function (item) {
      return item % 2 === 0;
    }) === false,
  );

  console.assert(
    arr.every(function (item) {
      return item > 0;
    }) === true,
  );
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 具有短路特性

  var arr = [1, 2, 3, 4, 5];

  var n = 0;

  console.assert(
    arr.every(function (item) {
      n++;
      return item % 2 === 0;
    }) === false,
  );

  console.assert(n === 1);
})();
