(function () {
  /*
   * 默认情况, multiplier / repetition 使用充血模式(greedy), 即:
   *   一直搜索直到"不能匹配"或者"达到最大次数"为止
   *
   * 可以在 multiplier 后面加一个 `?`, 表示使用饥血模式(non-greedy), 即:
   *   一直搜索直到"能够匹配"就得停止
   */

  const str = '1 22 333';

  console.assert(JSON.stringify(str.match(/\d+/g)) === JSON.stringify(['1', '22', '333']));
  console.assert(JSON.stringify(str.match(/\d+?/g)) === JSON.stringify(['1', '2', '2', '3', '3', '3']));
})();
