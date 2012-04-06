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
