// the-do-while-statement

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // do/while 语句至少会被执行一次

  var i = 0;
  do {
    i += 1;
  } while (i < 5);

  console.assert(i === 5);
})();
