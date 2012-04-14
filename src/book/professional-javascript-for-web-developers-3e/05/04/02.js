// reg-exp-instance-properties

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------

  var regExp = new RegExp('\\[foo\\]', 'g');

  console.assert(regExp.global === true);
  console.assert(regExp.ignoreCase === false);
  console.assert(regExp.multiline === false);
  // prettier-ignore
  console.assert(regExp.source === '\\[foo\\]');
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如果设置了 g,
  // 则每次调用 `RegExp.test()` 方法都会更新 `RegExp.lastIndex` 属性(即使方法参数变了), 表示下次查找的开始索引,
  // 如果 `RegExp.test()` 返回 false, 则 `RegExp.lastIndex` 会重置为 0

  var regExp = new RegExp('\\[foo\\]', 'g');

  console.assert(regExp.lastIndex === 0);
  console.assert(regExp.test('[foo][foo][bar]') === true);
  console.assert(regExp.lastIndex === 5);
  console.assert(regExp.test('[foo][foo][bar]') === true);
  console.assert(regExp.lastIndex === 10);
  console.assert(regExp.test('[foo][bar]') === false);
  console.assert(regExp.lastIndex === 0);
})();
