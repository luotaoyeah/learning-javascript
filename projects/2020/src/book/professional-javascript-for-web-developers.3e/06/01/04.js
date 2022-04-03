// reading-property-attributes

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Object.getOwnPropertyDescriptor()` 方法, 获取属性的 property descriptor

  var obj = { x: 1 };

  console.assert(
    JSON.stringify(Object.getOwnPropertyDescriptor(obj, 'x')) ===
      JSON.stringify({
        value: 1,
        writable: true,
        enumerable: true,
        configurable: true,
      }),
  );
})();
