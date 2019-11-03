(function () {
  /*
   * `m` 表示多行搜索,
   * 该模式下 `^` 和 `$` 不仅匹配字符串的开始和结束, 还匹配每一行的开始和结束
   */

  const str = 'javascript\nJAVASCRIPT\nJavaScript';

  console.assert(JSON.stringify(str.match(/^(java)|(script)$/gi)) === JSON.stringify(['java', 'Script']));
  console.assert(
    JSON.stringify(str.match(/^(java)|(script)$/gim)) ===
      JSON.stringify(['java', 'script', 'JAVA', 'SCRIPT', 'Java', 'Script']),
  );
})();
