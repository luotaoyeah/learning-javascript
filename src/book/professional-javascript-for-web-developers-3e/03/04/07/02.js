// the-object-type

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Object` 是所有对象类型的基类,
  // 所有对象都会继承它的方法和属性

  console.assert({}.toString === Object.prototype.toString);
  console.assert({}.__proto__ === Object.prototype);
})();
