// scope-chain-augmentation

(function () {
  // ----------------------------------------------------------------------------------------------------
  // execution context 有三种:
  //   1. global execution context
  //   2. function execution context
  //   3. eval execution context
  //
  // `with` 语句可以对 scope chain 进行增强
  // `with` 语句中的对象, 会被添加到当前 execution context 的 scope chain 的最前面

  var obj = { y: 2 };

  var x = 1;

  with (obj) {
    // 在 with 里面声明的变量, 会被添加到当前 function execution context 的 variable object 上
    var z = x + y;
    console.assert(z === 3);
  }

  console.assert(z === 3);
})();
