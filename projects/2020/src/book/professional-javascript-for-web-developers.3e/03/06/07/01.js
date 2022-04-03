// the-break-and-continue-statements

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `break` 用来终止循环

  var actual = [];

  for (var i = 1; i < 10; i++) {
    if (i % 3 === 0) {
      break;
    }

    actual.push(i);
  }

  console.assert(JSON.stringify(actual) === JSON.stringify([1, 2]));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `continue` 用来终止本次循环, 继续下次循环

  var actual = [];

  for (var i = 1; i < 10; i++) {
    if (i % 3 === 0) {
      continue;
    }

    actual.push(i);
  }

  console.assert(JSON.stringify(actual) === JSON.stringify([1, 2, 4, 5, 7, 8]));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 当有嵌套循环时, break/continue 只会终止它所在的那层循环,
  // 可以给某个循环加上 label, break/continue 后面跟上这个 label, 表示终止指定的循环

  var actual01 = [];
  for (var i = 1; i < 5; i++) {
    for (var j = 1; j < 5; j++) {
      if (j % 3 === 0) {
        break;
      }

      actual01.push(j);
    }
  }
  console.assert(JSON.stringify(actual01) === JSON.stringify([1, 2, 1, 2, 1, 2, 1, 2]));

  var actual02 = [];
  outer: for (var i = 1; i < 5; i++) {
    for (var j = 1; j < 5; j++) {
      if (j % 3 === 0) {
        break outer;
      }

      actual02.push(j);
    }
  }
  console.assert(JSON.stringify(actual02) === JSON.stringify([1, 2]));
})();
