// function-properties-and-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Function.prototype.bind()` 方法, 创建一个新的函数, 并指定 this 对象, 并指定部分参数的值

  function fn01(y, z) {
    return (this && this.x) + y + z;
  }

  console.log(fn01.valueOf());
  console.log('-------------------------');

  // `this` 被指定为 `{x: 1}`, 参数 y 被指定为 1,
  // 调用新的函数时, 只需要传入参数 z
  var fn02 = fn01.bind({ x: 1 }, 1);
  console.log(fn02.valueOf());

  console.assert(fn02(1) === 3);
  console.assert(fn02(2) === 4);
})();
