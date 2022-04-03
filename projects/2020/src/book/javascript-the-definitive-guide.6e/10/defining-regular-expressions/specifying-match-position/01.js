/*
 * 有一类特殊的规则, 它们的匹配结果不会包含在最终的匹配结果中,
 * 它们被称之为 anchor 或者 boundary
 */

(function () {
  /*
   * `^` 表示匹配行首
   */

  const str = 'java JAVA';

  console.assert(JSON.stringify(str.match(/java/gi)) === JSON.stringify(['java', 'JAVA']));
  console.assert(JSON.stringify(str.match(/^java/gi)) === JSON.stringify(['java']));
})();

(function () {
  /*
   * `$` 表示匹配行尾
   */

  const str = 'java JAVA';

  console.assert(JSON.stringify(str.match(/java/gi)) === JSON.stringify(['java', 'JAVA']));
  console.assert(JSON.stringify(str.match(/java$/gi)) === JSON.stringify(['JAVA']));
})();
