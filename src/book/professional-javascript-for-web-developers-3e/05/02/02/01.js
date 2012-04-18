// conversion-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Array.prototype.toString()` 方法, 返回数组的字符串表示,
  // 会调用每个元素的 toString() 方法, 然后将结果用逗号连接

  console.assert([1, 2, 3].toString() === '1,2,3');
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Array.prototype.toLocaleString()` 方法, 会调用每个元素的 toLocaleString() 方法

  var arr = [
    {
      toString: function () {
        return 1;
      },
      toLocaleString: function () {
        return 2;
      },
    },
    {
      toString: function () {
        return 3;
      },
      toLocaleString: function () {
        return 4;
      },
    },
  ];

  console.assert(arr.toString() === '1,3');
  console.assert(arr.toLocaleString() === '2,4');
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Array.prototype.toString()` 方法的结果中, 默认使用逗号连接,
  // `Array.prototype.join()` 方法, 默认跟 `Array.prototype.toString()` 方法结果一样,
  // 但是可以指定连接符号

  var arr = [1, 2, 3];

  console.assert(arr.toString() === arr.join());
  console.assert(arr.join('-') === '1-2-3');
})();
