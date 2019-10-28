(function () {
  /*
   * `{n}` 表示模式出现的次数为固定的: n === 次数
   */

  const str = '1 22 333 4444';

  console.assert(JSON.stringify(str.match(/\d{2}/g)) === JSON.stringify(['22', '33', '44', '44']));
  console.assert(JSON.stringify(str.match(/\d\d/g)) === JSON.stringify(['22', '33', '44', '44']));
})();
