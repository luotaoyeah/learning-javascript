// function-declarations-versus-function-expressions

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // function declaration 跟 function expression 的区别: function declaration 具有 hoist 特性
  //
  // 在 execution context 的创建过程中,
  //   variable declaration 会被添加到 context 上去, 值为 `undefined`
  //   function declaration 会被添加到 context 上去, 值为对函数代码的引用
  //
  // function expression 本质上是一个 variable declaration,
  // 因此在执行代码之前, 它的值为 `undefined`

  (function () {
    console.assert(fn01 instanceof Function);
    function fn01() {}
  })();

  (function () {
    console.assert(fn01 === undefined);
    var fn01 = function () {};
  })();
})();
