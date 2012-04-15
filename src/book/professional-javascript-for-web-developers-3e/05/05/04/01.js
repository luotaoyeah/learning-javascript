// functions-internals

(function () {
  // ----------------------------------------------------------------------------------------------------
  // NON-STRICT 模式下,
  // `arguments.callee` 表示当前函数对象本身

  function fn01() {
    console.assert(arguments.callee instanceof Function);
    return arguments.callee.x;
  }
  console.assert(fn01() === undefined);

  var fn02 = fn01;
  fn02.x = 1;
  console.assert(fn02() === 1);
})();
