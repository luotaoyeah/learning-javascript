(function () {
  /*
   * 默认情况下, repetition character 采用贪心（greedy）的方式进行匹配,
   * 即：一直往后匹配, 直到不匹配的地方才停止；
   *
   * 可以在 repetition character 后面加上一个 ? 来启用 non-greedy 的匹配方式,
   * 即：只要找到匹配的地方就停止；
   */
  console.log('\n-------------------------------------------------- 01');

  /* [ '999', index: 2, input: 'xx999xx' ] */
  console.log('xx999xx'.match(/\d+/));
  /* [ '9', index: 2, input: 'xx999xx' ] */
  console.log('xx999xx'.match(/\d+?/));
})();

(function () {
  /*
   * non-greedy 方式在某些时候的结果可能会跟期望不一致,
   * 需要记住的是 JS 的 regular expression 的匹配法则：
   *     找到第一个满足条件的索引
   */
  console.log('\n-------------------------------------------------- 02');

  /* [ 'aaab', index: 0, input: 'aaab' ] */
  console.log('aaab'.match(/a+b/));
  /* [ 'aaab', index: 0, input: 'aaab' ] */
  console.log('aaab'.match(/a+?b/));
})();
