// copying-values

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // primitive 变量存的是实际数据, 复制时复制的是实际数据

  var x = 'x';
  var y = x;
  console.assert(x === y);

  x = 'X';
  y = 'Y';
  console.assert(x === 'X');
  console.assert(y === 'Y');
  console.assert(x !== y);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // reference 变量存的是对象引用, 复制时复制的是对象引用,
  // 对象引用指向 heap 中的对象的实际数据

  var obj01 = { x: 'x' };
  var obj02 = obj01;
  console.assert(obj01 === obj02);

  obj01.x = 'X';
  obj02.x = 'Y';
  console.assert(obj01.x === 'Y');
  console.assert(obj02.x === 'Y');
  console.assert(obj01 === obj02);
})();
