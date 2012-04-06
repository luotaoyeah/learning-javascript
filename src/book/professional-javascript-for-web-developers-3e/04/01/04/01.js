// determining-type

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `typeof` 用来查询某个数据的类型名

  console.assert(typeof null === 'object');
  console.assert(typeof undefined === 'undefined');
  console.assert(typeof 0 === 'number');
  console.assert(typeof true === 'boolean');
  console.assert(typeof '' === 'string');
  console.assert(typeof function () {} === 'function');
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `instanceof` 用来判断某个对象是否是某个类的实例,
  // 即判断该类是否位于该对象的原型链上

  console.assert({} instanceof Object);
  console.assert([] instanceof Array);
  console.assert(function () {} instanceof Function);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // primitive 数据使用 `instanceof` 的结果始终是 `false`

  console.assert(0 instanceof Number === false);
  console.assert('' instanceof String === false);
  console.assert(true instanceof Boolean === false);
  console.assert(null instanceof Object === false);
  console.assert(undefined instanceof Object === false);
})();
