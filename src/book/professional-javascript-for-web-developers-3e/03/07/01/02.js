// no-overloading

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 没有真正的函数重载, 同名函数会被覆盖

  function f() {
    return 1;
  }

  function f() {
    return 2;
  }

  console.assert(f() === 2);
})();
