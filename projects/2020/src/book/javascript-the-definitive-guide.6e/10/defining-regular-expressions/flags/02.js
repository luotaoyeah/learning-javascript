(function () {
  /*
   * `g` 表示全局搜索, 即找出目标字符串中的所有匹配结果
   */

  const str = '123';

  console.assert(JSON.stringify(str.match(/\d/)) === JSON.stringify(['1']));
  console.assert(JSON.stringify(str.match(/\d/g)) === JSON.stringify(['1', '2', '3']));
})();

(function () {
  /*
   * 在非全局模式下, `RegExp.exec()` 和 `String.match()` 方法返回的结果是一样的
   */

  const str = '123';
  const regExp = /\d/;

  console.assert(JSON.stringify(str.match(regExp)) === JSON.stringify(regExp.exec(str)));
})();
