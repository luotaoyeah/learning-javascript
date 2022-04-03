// defining-multiple-properties

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Object.defineProperties()` 方法, 同时添加/修改多个属性

  var obj = {};

  Object.defineProperties(obj, {
    x: {
      value: 1,
    },
    y: {
      get: function () {
        return 2;
      },
    },
  });

  console.assert(obj.x === 1);
  console.assert(obj.y === 2);
})();
