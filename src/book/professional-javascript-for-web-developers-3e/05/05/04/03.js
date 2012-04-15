// functions-internals

(function () {
  // ----------------------------------------------------------------------------------------------------
  // NON-STRICT 模式下,
  // `Function.caller` 属性, 表示调用当前函数的外层函数对象

  function outer() {
    inner();
  }

  function inner() {
    console.assert(arguments.callee.caller === outer);
  }
})();
