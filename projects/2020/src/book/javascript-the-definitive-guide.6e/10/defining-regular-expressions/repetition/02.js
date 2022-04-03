(function () {
  /*
   * `{n,m}` 表示模式出现的次数为: n <= 次数 <= m
   */

  const str = '1 22 333 4444';

  console.assert(JSON.stringify(str.match(/\d{2,4}/g)) === JSON.stringify(['22', '333', '4444']));
})();
