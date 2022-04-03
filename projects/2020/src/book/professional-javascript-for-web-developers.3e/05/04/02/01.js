// reg-exp-instance-methods

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------

  var str = 'cat bat sat fat';
  var regExp = /.at/;

  // 如果不能匹配, 结果为 `null`
  console.assert(regExp.exec('') === null);

  var result = regExp.exec(str);

  // 结果数组的第一个元素为匹配结果
  console.assert(result[0] === 'cat');
  // 结果数组的 `index` 属性表示匹配结果的开始索引
  console.assert(result.index === 0);
  // 结果数组的 `input` 属性表示输入的参数
  console.assert(result.input === str);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如果有分组, 则从结果数组的第二个元素开始, 为每个分组的匹配结果

  var str = 'cat bat sat fat';
  var regExp = /(.)at/;

  console.assert(JSON.stringify(regExp.exec(str)) === JSON.stringify(['cat', 'c']));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如果设置了 g,
  // 则每次执行 `RegExp.exec()` 方法, 都会更新 `RegExp.lastIndex` 属性

  var str = 'cat bat sat fat';
  var regExp = /.at/g;

  console.assert(regExp.lastIndex === 0);

  console.assert(JSON.stringify(regExp.exec(str)) === JSON.stringify(['cat']));
  console.assert(regExp.lastIndex === 3);

  console.assert(JSON.stringify(regExp.exec(str)) === JSON.stringify(['bat']));
  console.assert(regExp.lastIndex === 7);

  console.assert(JSON.stringify(regExp.exec(str)) === JSON.stringify(['sat']));
  console.assert(regExp.lastIndex === 11);

  console.assert(JSON.stringify(regExp.exec(str)) === JSON.stringify(['fat']));
  console.assert(regExp.lastIndex === 15);

  // 如果结果为 `null`, 则 `RegExp.lastIndex` 会被重置为 0
  console.assert(regExp.exec(str) === null);
  console.assert(regExp.lastIndex === 0);
})();
