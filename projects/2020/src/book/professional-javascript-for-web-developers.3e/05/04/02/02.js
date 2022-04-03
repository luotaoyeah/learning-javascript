// reg-exp-instance-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `RegExp.test()` 跟 `RegExp.exec()` 的区别: 返回 true/false

  var str = 'cat bat sat fat';
  var regExp = /.at/g;

  console.assert(regExp.lastIndex === 0);

  console.assert(regExp.test(str) === true);
  console.assert(regExp.lastIndex === 3);

  console.assert(regExp.test(str) === true);
  console.assert(regExp.lastIndex === 7);

  console.assert(regExp.test(str) === true);
  console.assert(regExp.lastIndex === 11);

  console.assert(regExp.test(str) === true);
  console.assert(regExp.lastIndex === 15);

  console.assert(regExp.test(str) === false);
  console.assert(regExp.lastIndex === 0);
})();
