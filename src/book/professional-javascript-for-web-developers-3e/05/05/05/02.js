// function-properties-and-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Function.prototype.apply()` 方法, 调用函数, 并指定 this 对象,
  // 函数参数以数组的形式传递

  function fn01(y) {
    return (this && this.x) + y;
  }

  console.assert(Number.isNaN(fn01.apply()));
  console.assert(fn01.apply({ x: 1 }, [1]) === 2);
  console.assert(fn01.apply({ x: 2 }, [2]) === 4);
})();
