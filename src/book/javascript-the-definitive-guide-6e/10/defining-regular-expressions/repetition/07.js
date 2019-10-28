(function () {
  /*
   * `*` 表示模式出现的次数为: 0 <= 次数
   */

  const str = 'apple apply apples appless';

  console.assert(JSON.stringify(str.match(/apples*/g)) === JSON.stringify(['apple', 'apples', 'appless']));
  console.assert(JSON.stringify(str.match(/apples+/g)) === JSON.stringify(['apples', 'appless']));
  console.assert(JSON.stringify(str.match(/apples?/g)) === JSON.stringify(['apple', 'apples', 'apples']));
})();

(function () {
  /*
   * `*` 等价于 `{0,}`
   */

  const str = 'apple apply apples appless';

  console.assert(JSON.stringify(str.match(/apples*/g)) === JSON.stringify(['apple', 'apples', 'appless']));
  console.assert(JSON.stringify(str.match(/apples{0,}/g)) === JSON.stringify(['apple', 'apples', 'appless']));
})();
