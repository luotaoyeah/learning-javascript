/*
 * 除了匹配规则之外, regexp 中还支持 3 个标识选项
 *     i    case-insensitive    大小写不敏感
 *     g    global              全局搜索
 *     m    multiline           多行模式
 */

(function () {
  const str = 'java JAVA';

  console.assert(JSON.stringify(str.match(/java/g)) === JSON.stringify(['java']));
  console.assert(JSON.stringify(str.match(/java/gi)) === JSON.stringify(['java', 'JAVA']));
})();
