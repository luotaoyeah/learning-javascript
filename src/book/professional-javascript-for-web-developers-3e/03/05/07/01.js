// ==

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `==` 表示不严格的相等性比较
  // 比较的时候会自动进行类型转换, 类型转换的规则如下:

  // boolean 和 string 都会使用 `Number()` 函数转成 number 类型

  console.assert(true == 1);
  console.assert(false == 0);

  console.assert(1 == '1');

  console.assert(true == '1');
  console.assert(false == '0');
  console.assert(false == '');
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // null == undefined

  console.assert(null == null);
  console.assert(undefined == undefined);
  console.assert(null == undefined);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Number.NaN != Number.NaN`

  console.assert(Number.NaN != Number.NaN);
})();

(function () {
  // 对象比较的是引用

  console.assert({} != {});
})();
