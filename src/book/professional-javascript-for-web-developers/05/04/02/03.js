// reg-exp-instance-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------

  var regExp = new RegExp('.at', 'igm');

  console.assert(regExp.source === '.at');

  // g/i/m 会按照字符顺序自动进行排序
  console.assert(regExp.toString() === '/.at/gim');
  console.assert(regExp.toLocaleString() === '/.at/gim');
})();
