// the-array-type

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------

  // 使用 `Array` 构造函数创建数组实例
  console.assert(new Array().length === 0);

  // `new` 可以省略
  console.assert(Array().length === 0);

  // 如果只有一个参数, 且是 number 类型, 则参数表示 `length` 属性
  console.assert(new Array(3).length === 3);

  // 如果参数的类型不是 number 类型, 或者有多个参数, 则参数表示数组元素
  console.assert(new Array('3').length === 1);
  console.assert(new Array(3, 3).length === 2);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------

  // 使用 array literal 创建数组实例

  console.assert([1, 2, 3].length === 3);

  // 数组中最后一个逗号, 会被忽略
  // prettier-ignore
  console.assert([1, 2, 3].length === 3);
  console.assert([, , ,].length === 3);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------

  // 读取超过索引范围的值为 undefined
  console.assert([1, 2, 3][3] === undefined);

  // 设置超过索引范围的值, `length` 会自动增长, 空位会用 `undefined` 填充
  var arr01 = [1, 2, 3];
  arr01[5] = 6;
  console.assert((arr01.length = 6));
  console.assert(arr01[3] === undefined);
  console.assert(arr01[4] === undefined);
  console.assert(arr01[5] === 6);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------

  // 可以修改 `length` 属性, 元素会被截除或者填充
  var arr01 = [1, 2, 3];
  console.assert(arr01[2] === 3);
  arr01.length = 2;
  console.assert(arr01[2] === undefined);

  var arr02 = [1, 2, 3];
  arr02.length = 6;
  console.assert(arr02[3] === undefined);
  console.assert(arr02[4] === undefined);
  console.assert(arr02[5] === undefined);
})();
