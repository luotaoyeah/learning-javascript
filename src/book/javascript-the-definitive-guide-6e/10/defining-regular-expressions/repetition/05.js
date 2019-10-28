(function () {
  /*
   * `?` 表示模式出现的次数为: 0 或者 1
   */

  const str = 'apple apply apples appless';

  console.assert(JSON.stringify(str.match(/apples?/g)) === JSON.stringify(['apple', 'apples', 'apples']));
})();

(function () {
  /*
   * `?` 等价于 {0,1}
   */

  const str = 'apple apply apples appless';

  console.assert(JSON.stringify(str.match(/apples{0,1}/g)) === JSON.stringify(['apple', 'apples', 'apples']));
})();
