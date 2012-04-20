// the-eval-method

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `eval()` 函数, 将一个字符串解析成一段代码, 等价于直接在个位置定义这段代码

  var num01 = 1;

  // 在 NON-STRICT 模式下,
  // 里面可以访问外面的变量, 外面也可以访问里面的变量,
  // 表明里面的代码跟外面的代码共用一个 execution context
  eval('var num02 = 2; console.assert(num01 === 1);');

  console.assert(num02 === 2);
})();

(function () {
  'use strict';

  // ----------------------------------------------------------------------------------------------------
  // 在 STRICT 模式下,
  // 里面可以访问外面的变量, 但是外面不能访问里面的变量, 否则运行报错

  var num01 = 1;

  eval('var num02 = 2; console.assert(num01 === 1);');

  try {
    console.assert(num02 === 2);
  } catch (e) {
    console.assert(e instanceof ReferenceError);
    console.assert(e.message === 'num02 is not defined');
  }
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如果直接调用 `eval()` 函数, 则它的 execution context 就是当前的 function execution context,
  // 如果用非直接的方式调用 `eval()` 函数, 则它的 execution context 就是 global execution context
  // 非直接的方式包括:
  //   1. eval.call();
  //   2. eval.apply();
  //   3. window.eval();
  //   4. var eval02 = eval; eval02();

  var encodeURI = true;

  console.assert(typeof eval('(function (){ return encodeURI;})();') === 'boolean');
  console.assert(typeof eval.call(null, '(function (){ return encodeURI;})();') === 'function');
  console.assert(typeof eval.apply(null, ['(function (){ return encodeURI;})();']) === 'function');
  console.assert(typeof { eval02: eval }.eval02('(function (){ return encodeURI;})();') === 'function');
})();
