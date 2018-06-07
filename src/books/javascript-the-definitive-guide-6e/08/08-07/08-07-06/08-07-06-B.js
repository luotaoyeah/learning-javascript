(function() {
  /*
   * 使用 Function() 创建 function 时不能指定名称，
   * 其创建的都是 anonymous function；
   */
  console.log("\n-------------------------------------------------- 01");

  /* anonymous */
  new Function("console.log('anonymous')")();
})();
