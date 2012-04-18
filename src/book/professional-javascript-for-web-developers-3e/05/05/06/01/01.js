// the-boolean-type

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 包装类型 `Boolean` 的实例对象, 是真正的引用类型

  var bool01 = false;
  console.assert(typeof bool01 === 'boolean');
  console.assert((bool01 && true) === false);

  // 无论包装类型对应的原始类型是什么, 因为它是一个对象, 因此它转换成 `boolean` 类型时, 结果始终是 `true`
  var boo02 = new Boolean(false);
  console.assert(typeof boo02 === 'object');
  console.assert((boo02 && true) === true);

  console.assert(Boolean(new Boolean(false)) === true);
})();
