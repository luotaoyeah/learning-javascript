(function() {
  /*
   * | 分隔的备选项会从左往右依次匹配，只要匹配成功就立即停止；
   */
  console.log("\n-------------------------------------------------- 01");

  const pattern01 = /a|aa|aaa/;

  /* [ 'a', index: 0, input: 'aaaa' ] */
  console.log("aaaa".match(pattern01));
})();
