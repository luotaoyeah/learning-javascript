// the-module-pattern

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 使用 iife + closure 模拟 module

  var module01 = (function () {
    var _items = [];

    var _add = function (item) {
      _items.push(item);
    };

    return Object.create(Object.prototype, {
      length: {
        get: function () {
          return _items.length;
        },
      },
      add: {
        value: _add,
      },
    });
  })();

  console.assert(module01.length === 0);

  module01.add(1);
  console.assert(module01.length === 1);
})();
