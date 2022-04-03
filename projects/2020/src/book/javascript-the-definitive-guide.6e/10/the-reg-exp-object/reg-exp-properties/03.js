(function () {
  /*
   * `RegExp.lastIndex`
   *
   * 如果设置了 g, 则 `lastIndex` 记录了下一次搜索的开始索引,
   * `RegExp.exec()` 和 `RegExp.test()` 方法会用到该属性
   *
   * 如果没有设置 g, 则 `lastIndex` 始终为 0
   */

  const str = '1 22 333';
  const regExp = /\d{2}/g;

  console.assert(regExp.lastIndex === 0);

  regExp.exec(str);
  console.assert(regExp.lastIndex === 4);

  regExp.exec(str);
  console.assert(regExp.lastIndex === 7);

  /*
   * 整个字符串被搜索完了之后, 会将 `lastIndex` 重置为 0
   */
  regExp.exec(str);
  console.assert(regExp.lastIndex === 0);
})();

(function () {
  /*
   * `RegExp.lastIndex` 可以手动修改
   */

  const str = '1 22 333 4444';

  const regExp01 = /\d{2}/g;
  console.assert(JSON.stringify(regExp01.exec(str)) === JSON.stringify(['22']));

  const regExp02 = /\d{2}/g;
  regExp02.lastIndex = 8;
  console.assert(JSON.stringify(regExp02.exec(str)) === JSON.stringify(['44']));
})();
