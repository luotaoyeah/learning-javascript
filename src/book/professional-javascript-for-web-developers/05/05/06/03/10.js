// string-pattern-matching-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `String.prototype.split()` 根据某个 separator 分裂成数组

  var str = 'yellow.red.blue.black.white';

  // 如果参数为空, 返回字符串作为单个元素组成的数组
  console.assert(JSON.stringify(str.split()) === JSON.stringify([str]));

  // 第一个参数 separator 如果是一个字符串, 则它是一个普通的字符串
  console.assert(JSON.stringify(str.split('.')) === JSON.stringify(['yellow', 'red', 'blue', 'black', 'white']));

  console.assert(JSON.stringify(str.split(/[^.]+/)) === JSON.stringify(['', '.', '.', '.', '.', '']));
})();
