// the-object-type

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------

  // 使用 `Object` 构造函数创建一个对象实例
  var obj01 = new Object();
  obj01.x = 1;
  obj01.y = 2;

  // 使用 object literal 创建一个对象实例
  var obj02 = {
    x: 1,
    y: 2,
  };

  console.assert(JSON.stringify(obj01) === JSON.stringify(obj02));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------

  var obj = {
    // 属性名可以是 number 类型, 会被转换成 string 类型
    5: 1,
    // 属性名可以包含空格, 此时必须使用引号包裹
    'x y': 2,
  };

  console.assert(obj['5'] === 1);
  console.assert(obj['x y'] === 2);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 访问对象属性有两种方式:
  //   1. dot notation
  //   2. barcket notation

  var obj = {
    x: 1,
    ' y ': 2,
  };

  var key = 'x';

  console.assert(obj.x === obj['x']);
  console.assert(obj.x === obj[key]);

  // 如果属性名包含特殊字符, 就只能使用 bracket notation 访问
  console.assert(obj[' y '] === 2);
})();
