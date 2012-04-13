// date-formatting-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 几个用于格式化的方法, 不同浏览器有不同实现

  var date = new Date('2012-04-01T13:01:01.000+0800');

  console.assert(date.toDateString() === 'Sun Apr 01 2012');
  console.assert(date.toTimeString() === '13:01:01 GMT+0800 (GMT+08:00)');

  console.assert(date.toLocaleDateString() === '2012-4-1');
  console.assert(date.toLocaleTimeString() === '13:01:01');

  // `Date.toUTCString()` 和 `Date.toISOString()` 返回的时间都是基于 0 时区的
  console.assert(date.toUTCString() === 'Sun, 01 Apr 2012 05:01:01 GMT');
  console.assert(date.toISOString() === '2012-04-01T05:01:01.000Z');
})();
