// logical-not

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `!` 表示逻辑否定,
  // 作用于非 boolean 类型时, 会首先使用 `Boolean()` 函数转换为 boolean 类型, 再取否定

  console.assert(!null === true);
  console.assert(!undefined === true);
  console.assert(!0 === true);
  console.assert(!'' === true);
  console.assert(!Number.NaN === true);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `!!` 的作用等价于 `Boolean()` 函数,
  // 将任意类型的数据, 转换为 boolean 值

  console.assert(!!null === Boolean(null));
  console.assert(!!undefined === Boolean(undefined));
  console.assert(!!0 === Boolean(0));
  console.assert(!!'' === Boolean(''));
  console.assert(!!Number.NaN === Boolean(Number.NaN));
})();
