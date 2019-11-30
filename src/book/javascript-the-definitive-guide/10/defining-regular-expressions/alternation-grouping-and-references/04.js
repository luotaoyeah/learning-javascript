(function () {
  /*
   * 分组的第三个作用是:
   *   每个分组的匹配结果, 可以在 regexp 中的其他地方引用, 通过 `\n` 的形式,
   *   其中 n 表示第几个分组, 从 1 开始
   *
   * 这种用法又称为 back reference
   */

  const str = '1-1 1-2 2-3 3-3';

  console.assert(JSON.stringify(str.match(/(\d)-\1/g)) === JSON.stringify(['1-1', '3-3']));
})();
