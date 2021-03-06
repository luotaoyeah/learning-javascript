// no-block-level-scopes

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // execution context 只有三种, 代码块没有对应的 execution context,
  // 因此不存在 block-level scope, 所有代码库中声明的变量, 都属于当前的 execution context

  var x = 1;
  {
    var y = 2;
    {
      var z = 3;
    }
  }

  console.assert(x === 1);
  console.assert(y === 2);
  console.assert(z === 3);
})();
