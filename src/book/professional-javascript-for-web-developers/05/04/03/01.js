// reg-exp-constructor-properties

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `RegExp.lastMatch` 静态属性, 表示最近一次的匹配结果

  var regExp = /(.)oo/g;

  regExp.exec('foo hoo boo woo');
  console.assert(RegExp.lastMatch === 'foo');

  regExp.exec('foo hoo boo woo');
})();

(function () {
  // ----------------------------------------------------------------------------------------------------

  console.assert(RegExp.lastMatch === 'hoo');
})();
