// divide

'use strict';

// `/` 表示除法

// 如果操作数包含 Infinity 或者 NaN 或者 0, 则有几个特殊情况需要注意

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如果结果超过表示范围, 则结果为 Infinity / -Infinity

  console.assert(Number.MAX_VALUE / Number.MIN_VALUE === Infinity);
  console.assert(Number.MAX_VALUE / -Number.MIN_VALUE === -Infinity);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Infinity / Infinity == Number.NaN`

  console.assert(Number.isNaN(Infinity / Infinity));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Infinity / <非Infinity数字> == Infinity`

  console.assert(Infinity / 0 === Infinity);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `<非Infinity数字> / Infinity == 0`

  console.assert(0 / Infinity === 0);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `0 / 0 == Number.NaN`

  console.assert(Number.isNaN(0 / 0));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `<非0数字> / 0 == Infinity`

  console.assert(Infinity / 0 === Infinity);
  console.assert(-Infinity / 0 === -Infinity);
})();
