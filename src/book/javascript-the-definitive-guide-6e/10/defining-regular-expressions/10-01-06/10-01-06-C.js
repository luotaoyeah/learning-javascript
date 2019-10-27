(function () {
  /*
   * 标识元素 m 表示支持多行搜索；
   * 该模式下 ^ 和 $ 不仅匹配字符串的开始和结束, 还匹配一行的开始和结束；
   */
  console.log('\n-------------------------------------------------- 01');
  const pattern01 = /^java$/g;
  const pattern02 = /^java$/gm;

  /* null */
  console.log('java\njava\njava'.match(pattern01));
  /* [ 'java', 'java', 'java' ] */
  console.log('java\njava\njava'.match(pattern02));
})();
