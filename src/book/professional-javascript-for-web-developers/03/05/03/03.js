// logical-or

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `||` 表示逻辑或,
  // 它具有短路特性(short-circuit): 当前面的条件不成立时, 后面的条件不会被执行

  console.assert((true || x) === true);
  console.assert(
    (true ||
      (function () {
        throw new Error();
      })()) === true,
  );
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `||` 返回的结果, 是最后一个被执行的操作数,
  // 在判断条件的时候, 会将操作数转换成 boolean 类型进行判断,
  // 但是在返回结果的时候, 返回的是最后一个被执行的操作数

  console.assert((false || null) === null);
  console.assert((false || undefined) === undefined);
  console.assert((false || 0) === 0);
  console.assert((false || '') === '');
  console.assert(Number.isNaN(false || Number.NaN));

  console.assert((3 || false) === 3);
})();
