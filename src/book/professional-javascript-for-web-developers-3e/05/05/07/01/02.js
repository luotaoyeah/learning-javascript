// uri-encoding-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `decodeURI()` 是 `encodeURI()` 的反操作
  // `decodeURIComponent()` 是 `encodeURIComponent()` 的反操作

  console.assert(decodeURI('%23') === '%23');
  console.assert(decodeURIComponent('%23') === '#');

  console.assert(decodeURI('%3F') === '%3F');
  console.assert(decodeURIComponent('%3F') === '?');
})();
