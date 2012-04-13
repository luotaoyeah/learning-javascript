// inherited-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Date.valueOf()` 方法, 返回毫秒数

  var date = new Date('2012-04-12T00:00:00.000');
  console.assert(date.getTime() === date.valueOf());
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Date.toString()` 和 `Date.toLocaleString()` 不同浏览器有不同的实现,
  // 因此一般用作调试, 不宜用于业务逻辑

  var date = new Date('2012-04-12T00:00:00.000Z');
  // `Date.toString()` 中包含时区信息
  console.log(date.toString());
  // `Date.toLocaleString()` 中不包含时区信息
  console.log(date.toLocaleString());
})();
