// string-pattern-matching-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `String.prototype.match()` 方法, 返回匹配结果数组
  // 如果没有设置 g, 则返回结果跟 `RegExp.prototype.exec()` 方法的结果一样

  var str = 'cat bat sat fat';
  var regExp = /(.)at/;

  var result01 = str.match(regExp);
  var result02 = regExp.exec(str);

  console.assert(result01[0] === result02[0]);
  console.assert(result01[1] === result02[1]);
  console.assert(result01.index === result02.index);
  console.assert(result01.input === result02.input);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如果设置了 g, 则返回所有匹配结果组成的数组

  var str = 'cat bat sat fat';
  var regExp = /(.)at/g;

  console.assert(JSON.stringify(str.match(regExp)) === JSON.stringify(['cat', 'bat', 'sat', 'fat']));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如果参数是一个字符串, 则参数会作为 `new RegExp()` 构造函数的参数

  var str = 'cat bat sat fat';
  console.assert(JSON.stringify(str.match('(.)at')) === JSON.stringify(['cat', 'c']));
})();
