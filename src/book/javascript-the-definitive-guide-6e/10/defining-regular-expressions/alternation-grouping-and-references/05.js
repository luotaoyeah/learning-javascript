(function () {
  /*
   * 分组可以嵌套, 此时如何计算分组索引?
   * 根据每个分组的左圆括号, 从左往右计算
   */

  const str = 'JavaScript_Script javascript_script';

  console.assert(
    JSON.stringify(str.match(/([Jj]ava([Ss]cript))_\2/g)) ===
      JSON.stringify(['JavaScript_Script', 'javascript_script']),
  );
})();
