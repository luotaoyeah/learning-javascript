// string-pattern-matching-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `String.prototype.replace()` 方法, 匹配并且替换,
  // 返回替换后的新字符串

  // 如果匹配参数是一个字符串, 则它是一个普通的字符串, 只会匹配第一个结果
  var str = 'cat bat sat fat';
  console.assert(str.replace('at', 'x') === 'cx bat sat fat');

  // 如果参数是一个 regexp, 则可以设置 g 全局替换
  console.assert(str.replace(/at/g, 'x') === 'cx bx sx fx');
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如果第二个参数是字符串, 则可以包含有特殊含义的字符

  var str = 'cat bAT sat fAT';

  // `$$` 表示 `$` 字符, 类似于转义字符
  console.assert(str.replace(/at/gi, '$$') === 'c$ b$ s$ f$');

  // `$&` 表示匹配结果
  console.assert(str.replace(/at/gi, '$&') === 'cat bAT sat fAT');

  // `$`` 表示匹配结果左边的内容
  console.assert(str.replace(/at/gi, '$`') === 'cc bcat b scat bAT s fcat bAT sat f');

  // `$'` 表示匹配结果右边的内容
  console.assert(str.replace(/at/gi, "$'") === 'c bAT sat fAT b sat fAT s fAT f');

  // `$n` 表示分组匹配结果, n 从 1 开始
  console.assert(str.replace(/(\w)a(\w)/gi, '$1-$2') === 'c-t b-T s-t f-T');
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如果第二个参数是一个函数,
  // 函数的第一个参数表示匹配结果,
  // 函数的最后两个参数表示匹配索引和原始字符串,
  // 函数中间的参数表示所有的分组匹配结果

  var str = 'cat bAT sat fAT';
  console.assert(
    str.replace(/(\w)a(t)/gi, function (match, group01, group02, index, _str) {
      console.assert(typeof index === 'number');
      console.assert(_str === str);

      return group01 + index + group02.toUpperCase();
    }) === 'c0T b4T s8T f12T',
  );
})();
