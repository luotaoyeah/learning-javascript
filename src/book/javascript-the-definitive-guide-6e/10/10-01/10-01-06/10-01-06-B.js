(function() {
  /*
   * 标识元素 g 表示全局搜索, 即找出目标字符串中的所有匹配项；
   */
  console.log("\n-------------------------------------------------- 01");

  const pattern01 = /x/;
  const pattern02 = /x/g;

  /* [ 'x', index: 0, input: 'x9x9x9' ] */
  console.log("x9x9x9".match(pattern01));
  /* [ 'x', 'x', 'x' ] */
  console.log("x9x9x9".match(pattern02));
})();
