// rounding-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Math.ceil()`  向上取整
  // `Math.floor()` 向下取整
  // `Math.round()` 四舍五入取整

  console.assert(Math.ceil(2.4) === 3);
  console.assert(Math.ceil(2.5) === 3);
  console.assert(Math.ceil(2.6) === 3);

  console.assert(Math.floor(2.4) === 2);
  console.assert(Math.floor(2.5) === 2);
  console.assert(Math.floor(2.6) === 2);

  console.assert(Math.round(2.4) === 2);
  console.assert(Math.round(2.5) === 3);
  console.assert(Math.round(2.6) === 3);
})();
