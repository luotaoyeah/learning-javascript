(function () {
  /*
   * `RegExp()` 作为构造函数接收 2 个参数:
   *     第一个参数表示该 regexp 的字符串形式,
   *     第二个参数表示标识选项, 必须为 `g/i/m` 的组合
   */

  const str = 'javaSCRIPT';

  console.assert(JSON.stringify(str.match(new RegExp('^(j(a)v\\2)(?=script)', 'gi'))) === JSON.stringify(['java']));
})();

(function () {
  /*
   * 如果该 regular expressioin 中包含 `\` 字符, 比如 `\d`
   * 则 `\` 需要进行转义, 即写为: `\\`
   */

  const str = '1 22 333';
  console.assert(JSON.stringify(str.match(new RegExp('\\d{3}', 'g'))) === JSON.stringify(['333']));
})();
