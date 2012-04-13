// date-time-component-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 可以对 "年/月/日/星期/时/分/秒/毫秒" 分别进行取值和赋值,
  // 返回的都是时间的毫秒数,
  // 方法名中含有'UTC'的方法们, 取值/赋值都是基于 0 时区进行操作

  var date = new Date('2012-04-01T13:01:01.000+0800');

  console.assert(date.getHours() === 13);
  console.assert(date.getUTCHours() === 5);

  date.setHours(14);
  console.assert(date.toISOString() === '2012-04-01T06:01:01.000Z');

  date.setUTCHours(14);
  console.assert(date.toISOString() === '2012-04-01T14:01:01.000Z');
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 月份是从 0 开始的

  var date = new Date('2012-04-01T13:01:01.000');
  console.assert(date.getMonth() === 3);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Date.getDate()` 返回 日,
  // `Date.getDay()`  返回 星期, 0 表示星期天, 以此类推

  var date = new Date('2012-04-01T13:01:01.000+0800');
  console.assert(date.getDate() === 1);
  console.assert(date.getDay() === 0);
})();
