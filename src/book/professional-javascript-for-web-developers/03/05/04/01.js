// multiply

'use strict';

// `*` 表示乘法

// 如果操作数包含 Infinity 或者 NaN, 则有几个特殊情况需要注意

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如果结果超过表示范围, 则结果为 Infinity / -Infinity

  console.assert(Number.MAX_VALUE * 2 === Infinity);
  console.assert(Number.MAX_VALUE * -2 === -Infinity);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如果某个操作数是 `Number.NaN`, 则结果为 `Number.NaN`,
  // 这是因为 `Number.NaN` 跟任何数据的任何运算结果都还是 `Number.NaN`

  console.assert(Number.isNaN(Number.NaN * Number.NaN));
  console.assert(Number.isNaN(Number.NaN * Infinity));
  // noinspection PointlessArithmeticExpressionJS
  console.assert(Number.isNaN(Number.NaN * 0));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Infinity * 0 == Number.NaN`

  // noinspection PointlessArithmeticExpressionJS
  console.assert(Number.isNaN(Infinity * 0));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Infinity * <非0数字> == Infinity`

  console.assert(Infinity * Infinity === Infinity);
})();
