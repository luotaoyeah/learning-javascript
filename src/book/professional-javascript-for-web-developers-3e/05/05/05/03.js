// function-properties-and-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Function.prototype.call()` 方法, 调用函数, 并指定 this 对象,
  // 函数参数以单个的形式传递

  function fn01(y, z) {
    return (this && this.x) + y + z;
  }

  console.assert(Number.isNaN(fn01.call()));
  console.assert(fn01.call({ x: 1 }, 1, 1) === 3);
  console.assert(fn01.call({ x: 2 }, 2, 2) === 6);
})();
