// the-function-type

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 函数是 `Function` 类的实例对象

  console.assert(function () {} instanceof Function);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------

  // function declaration
  function sum01(x, y) {
    return x + y;
  }

  console.assert(sum01(1, 1) === 2);

  // function expression
  var sum02 = function (x, y) {
    return x + y;
  };
  console.assert(sum02(1, 1) === 2);

  // 使用 `new Function()` 构造函数,
  // 最后一个参数表示函数体, 其他参数表示函数参数
  var sum03 = new Function('x', 'y', 'return x + y;');
  console.assert(sum03(1, 1) === 2);
})();
