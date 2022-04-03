(function () {
  /*
   * 默认情况, 每个规则匹配的都是单个字符,
   * 如果一个规则要匹配多次, 需要重复声明多次
   */

  const str = '1 22 333 4444';
  console.assert(JSON.stringify(str.match(/\d\d/g)) === JSON.stringify(['22', '33', '44', '44']));
  console.assert(JSON.stringify(str.match(/\d\d\d/g)) === JSON.stringify(['333', '444']));
  console.assert(JSON.stringify(str.match(/\d\d\d\d/g)) === JSON.stringify(['4444']));
})();
