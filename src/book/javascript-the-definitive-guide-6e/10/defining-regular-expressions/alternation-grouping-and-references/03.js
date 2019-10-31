(function () {
  /*
   * 分组的第二个作用是:
   *   每个分组所匹配的结果, 会被单独提取出来
   */

  const str = 'javascript JAVA-SCRIPT';
  const regExp = /(java)(-?)(script)/gi;

  /*
   * 如下, exec() 返回的结果数组中, 第一个元素为最终的匹配结果,
   * 从第二个元素开始, 依次是每个分组的匹配结果
   */
  console.assert(JSON.stringify(regExp.exec(str)) === JSON.stringify(['javascript', 'java', '', 'script']));
  console.assert(JSON.stringify(regExp.exec(str)) === JSON.stringify(['JAVA-SCRIPT', 'JAVA', '-', 'SCRIPT']));
})();
