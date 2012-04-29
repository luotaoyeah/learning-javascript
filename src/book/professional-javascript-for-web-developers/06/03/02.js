// default-prototypes

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // prototype chain 的最顶端一定是 `Object.prototype` 对象

  function Person() {}

  console.assert(Object.getPrototypeOf(Person.prototype) === Object.prototype);
})();
