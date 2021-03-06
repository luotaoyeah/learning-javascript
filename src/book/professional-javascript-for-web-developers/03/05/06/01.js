// relational-operators

'use strict';

// `<` 表示数字大小比较 (优先级高)
// `<` 也可以表示字符编码大小比较

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如下都是比较数字大小

  console.assert('11' > 2);
  console.assert('0' < true);
  console.assert('-1' < false);
  console.assert('-1' < null);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 只有两个数据都是 string 类型时, 才会比较字符编码

  console.assert('a' < 'b');
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Number.NaN` 跟任何数据的比较结果都是 false

  console.assert(Number.NaN < 0 === false);
  console.assert((Number.NaN === 0) === false);
  console.assert(Number.NaN > 0 === false);
})();
