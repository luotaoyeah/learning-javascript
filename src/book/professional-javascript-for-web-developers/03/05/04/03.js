// modulus

'use strict';

// `%` 表示取余

// 如果操作数包含 Infinity 或者 NaN 或者 0, 则有几个特殊情况需要注意

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Infinity % <任意数字> == NaN`

  console.assert(Number.isNaN(Infinity % Infinity));
  console.assert(Number.isNaN(Infinity % 0));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `<任意数字> % 0 == NaN`

  console.assert(Number.isNaN(0 % 0));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `<非Infinity数字> % Infinity == <非Infinity数字>`

  console.assert(0 % Infinity === 0);
  console.assert(1 % Infinity === 1);
})();
