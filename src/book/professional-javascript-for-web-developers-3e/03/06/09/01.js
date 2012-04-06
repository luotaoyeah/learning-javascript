// the-switch-statement

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `switch` 使用 === 进行条件匹配

  var actual;

  switch ('10') {
    case 10:
      actual = 10;
      break;
    default:
      actual = '10';
      break;
  }

  console.assert(actual === '10');
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `switch` 后面的条件可以是一个表达式

  var actual;

  switch (!!'0') {
    case false:
      actual = false;
      break;
    default:
      actual = true;
      break;
  }

  console.assert(actual === true);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `case` 后面的数据可以是一个表达式

  var actual;

  switch (true) {
    case 1 < 2 && 2 < 1:
      actual = false;
      break;
    default:
      actual = true;
      break;
  }

  console.assert(actual === true);
})();
