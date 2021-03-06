// additive

'use strict';

// `+` 表示加法
// `+` 也可以表示字符串的拼接操作 (优先级高)

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Infinity + -Infinity == Number.NaN`

  console.assert(Number.isNaN(Infinity + -Infinity));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如果某一个操作数是 number 类型, 另一个操作数是 null/undefined/boolean/object 类型,
  // 则会使用 `Number()` 函数将这个操作数转换成 number 类型

  console.assert(5 + null === 5);
  console.assert(Number.isNaN(5 + undefined));
  console.assert(5 + true === 6);
  console.assert(5 + false === 5);
  console.assert(
    5 +
      {
        valueOf() {
          return 5;
        },
      } ===
      10,
  );
  console.assert(
    5 +
      {
        toString() {
          return 5;
        },
      } ===
      10,
  );
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如果其中一个操作数是 string 类型,
  // 则会使用 `String()` 函数将另一个操作数转换成 string 类型, 再进行字符串拼接操作

  console.assert('' + null === 'null');
  console.assert('' + undefined === 'undefined');
  console.assert('' + 0 === '0');
  console.assert('' + true === 'true');
  console.assert('' + false === 'false');
  console.assert('' + {} === '[object Object]');
  console.assert(
    '' +
      {
        valueOf() {
          return 0;
        },
      } ===
      '0',
  );
  console.assert(
    '' +
      {
        toString() {
          return 0;
        },
      } ===
      '0',
  );
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `+` 作为拼接操作符的优先级大于作为加法运算符的优先级

  console.assert(0 + '0' === '00');
})();
