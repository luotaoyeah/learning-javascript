// garbage-collection

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 垃圾回收有两种策略:
  //   1. 标记清除 (mark-and-sweep)
  //   2. 引用计数 (reference-counting)
  //
  // 引用计数可能存在循环引用问题
  //
  // 对于 global reference variable, 不再使用时, 应该手动将它赋值为 null,
  // 这样它下次就可以被回收, 这个操作称之为 de-reference,
  // local reference variable 可以不用 de-reference

  var globalReference = (function () {
    var localReference = new Object();
    localReference.name = 'foo';
    return localReference;
  })();

  console.assert(globalReference.name === 'foo');

  globalReference = null;
})();
