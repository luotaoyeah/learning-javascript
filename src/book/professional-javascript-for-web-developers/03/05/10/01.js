// comma-operator

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 在一个语句中同时声明多个变量时, 使用的就是 comma 运算符

  var x = 1,
    y = 2,
    z = 3;

  console.assert(x === 1);
  console.assert(y === 2);
  console.assert(z === 3);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 每个表达式都会被执行, 并返回最后一个表达式的值

  var x, y, z;
  console.assert(((x = 1), (y = 2), (z = 3), x + y + z) === 6);
})();
