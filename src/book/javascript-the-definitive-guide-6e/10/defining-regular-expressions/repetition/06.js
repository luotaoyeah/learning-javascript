(function () {
  /*
   * `+` 表示模式出现的次数为: 1 <= 次数
   */

  const str = 'apple apply apples appless';

  console.assert(JSON.stringify(str.match(/apples+/g)) === JSON.stringify(['apples', 'appless']));
})();

(function () {
  /*
   * `+` 等价于 `{1,}`
   */

  const str = 'apple apply apples appless';

  console.assert(JSON.stringify(str.match(/apples+/g)) === JSON.stringify(['apples', 'appless']));
  console.assert(JSON.stringify(str.match(/apples{1,}/g)) === JSON.stringify(['apples', 'appless']));
})();
