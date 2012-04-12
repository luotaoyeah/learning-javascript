// the-date-type

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Date.parse()` 方法, 将字符串转换为毫秒数

  var ms01 = Date.parse('4/12/2012');
  var ms02 = Date.parse('April 12, 2012');
  var ms03 = Date.parse('2012-04-12T00:00:00.000');

  console.assert(ms01 === ms02);
  console.assert(ms01 === ms03);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 未指定时区时, 默认使用当前系统时区

  var ms01 = Date.parse('2012-04-12T00:00:00.000');
  var ms02 = Date.parse('2012-04-12T00:00:00.000+0800');
  console.assert(ms01 === ms02);

  var ms03 = Date.parse('2012-04-12T00:00:00.000Z');
  var ms04 = Date.parse('2012-04-12T00:00:00.000+0000');
  console.assert(ms03 === ms04);
})();
