// detecting-arrays

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如果在同一个 global execution context 中,
  // 可以使用 `instanceof` 来判断某个对象是否是 `Array` 类型

  console.assert(new Array() instanceof Array);
  console.assert([] instanceof Array);

  // 如果是在不同的 iframe 中创建的 array 对象, 则不能用此方法来判断
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 使用 `Array.isArray()` 方法, 判断某个对象是否是 `Array` 类型

  console.assert(Array.isArray(new Array()));
  // prettier-ignore
  console.assert(Array.isArray(new Array));
  console.assert(Array.isArray(Array()));
  console.assert(Array.isArray([]));

  console.assert(false === Array.isArray({}));
  console.assert(false === Array.isArray(null));
  console.assert(false === Array.isArray(undefined));
})();
