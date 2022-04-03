// logical-and

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `&&` 表示逻辑与,
  // 它具有短路特性(short-circuit): 当前面的条件不成立时, 后面的条件不会被执行

  console.assert((false && x) === false);

  console.assert(
    (false &&
      (function () {
        throw new Error();
      })()) === false,
  );
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `&&` 返回的结果, 是最后一个被执行的操作数,
  // 在判断条件的时候, 会将操作数转换成 boolean 类型进行判断,
  // 但是在返回结果的时候, 返回的是最后一个被执行的操作数
  //
  // 所谓"最后一个被执行的操作数"指的是能够决定运算结果的那个操作数

  console.assert((null && true) === null);

  console.assert((undefined && true) === undefined);
  console.assert((0 && true) === 0);
  console.assert(('' && true) === '');
  console.assert(Number.isNaN(Number.NaN && true));

  console.assert(true && null === null);
  console.assert(({} && null) === null);
})();
