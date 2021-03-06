// the-for-in-statement

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // for/in 用来遍历对象的属性名称

  var actual = [];

  for (var key in {
    x: 1,
    y: 2,
    z: 3,
  }) {
    actual.push(key);
  }

  console.assert(JSON.stringify(actual) === JSON.stringify(['x', 'y', 'z']));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 可以用来遍历数组的索引

  var actual = [];
  for (var key in [1, 2, 3]) {
    actual.push(key);
  }

  console.assert(JSON.stringify(actual) === JSON.stringify(['0', '1', '2']));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 遍历 null/undefined 时, 循环体不会被执行

  var actual = [];
  for (var x in null) {
    actual.push(x);
  }
  console.assert(JSON.stringify(actual) === JSON.stringify([]));

  actual = [];
  for (var y in undefined) {
    actual.push(y);
  }
  console.assert(JSON.stringify(actual) === JSON.stringify([]));
})();
