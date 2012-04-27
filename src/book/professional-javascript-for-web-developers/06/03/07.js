// prototypal-inheritance

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Object.create()` 方法, 创建一个实例对象, 并指定它的 prototype 对象

  var prototype01 = { x: 1 };

  var obj = Object.create(prototype01, {
    y: {
      value: 2,
      enumerable: true,
      configurable: true,
      writable: true,
    },
  });

  console.assert(prototype01.isPrototypeOf(obj));
  console.assert(Object.getPrototypeOf(obj) === prototype01);
})();
