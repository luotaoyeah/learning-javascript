(function() {
  /*
   * 使用 Function() 创建 function 是在运行时动态地创建并编译一个 function；
   * 使用 Function() 创建的 function 不使用 lexical scoping,
   * 始终会被编译为顶层的 function；
   */
  console.log("\n-------------------------------------------------- 01");

  var scope = "global";

  /* local */
  (function fn01() {
    var scope = "local";
    return function() {
      console.log(scope);
    };
  })()();

  /*
   * TODO 待验证
   * 报错：ReferenceError: scope is not defined
   */
  (function fn02() {
    var scope = "local";
    return new Function("return scope");
  })()();
})();
