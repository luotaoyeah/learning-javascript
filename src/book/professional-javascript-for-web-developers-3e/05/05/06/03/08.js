// string-pattern-matching-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `String.prototype.search()` 方法, 返回匹配结果索引,
  // 如果找不到, 则返回 -1

  var str = 'cat bat sat fat';

  console.assert(str.search(/(.)at/g) === 0);

  // 如果参数是字符串, 则会作为 `new RegExp()` 构造函数的参数
  console.assert(str.search('(.)bt') === -1);
})();
