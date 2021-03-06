// unary-plus-and-minus

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // + 用在 number 类型前面, 没有任何效果,
  // + 用在 string/boolean/object 类型前面, 相当于使用 `Number()` 函数进行类型转换
  //
  // - 用在 number 类型前面, 表示对正负取反,
  // - 用在 string/boolean/object 类型前面, 相当于先用 `Number()` 函数进行类型转换, 再对正负取反

  console.assert(+'3.14' === 3.14);
  console.assert(+true === 1);
  console.assert(
    +{
      valueOf: function () {
        return 9;
      },
    } === 9,
  );

  console.assert(-'3.14' === -3.14);
  console.assert(-true === -1);
  console.assert(
    -{
      toString: function () {
        return 9;
      },
    } === -9,
  );
})();
