(function () {
  /*
   * 使用 `()` 声明的是一个 capture group,
   * 使用 `(?:)` 声明的是一个 non-capture group,
   * non-capture group 的匹配结果不会被提取, 不能被 back reference,
   * 作用只是当成一个整体看待
   */

  const str = '9_9_ 9_99';

  console.assert(JSON.stringify(str.match(/(\d)(_)(\d)\2/g)) === JSON.stringify(['9_9_']));
  console.assert(JSON.stringify(str.match(/(\d)(?:_)(\d)\2/g)) === JSON.stringify(['9_99']));
})();
