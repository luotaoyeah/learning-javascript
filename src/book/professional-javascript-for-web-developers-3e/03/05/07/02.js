// ===

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `===` 在进行比较时, 不会自动进行类型转换

  console.assert(null == undefined);
  console.assert(null !== undefined);

  console.assert('0' == 0);
  console.assert('0' !== 0);
})();
