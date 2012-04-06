// the-for-statement

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // for 循环可以实现跟 while 循环一样的功能

  for (var x = 0; x < 5; x++) {
    // DO SOMETHING
  }
  console.assert(x === 5);

  var y = 0;
  while (y < 5) {
    // DO SOMETHING
    y++;
  }
  console.assert(y === 5);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 使用 `var` 声明的变量, 只有 global scope 和 function scope 两种作用域,
  // 因此在 for 循环中声明的变量, 在循环结束之后, 依然可以被访问

  for (var i = 0; i < 5; ++i) {
    // DO SOMETHING
  }

  console.assert(i === 5);
})();

(function () {
  // for 循环的三个部分都可以省略

  var i = 0;
  for (; i < 5; ) {
    // DO SOMETHING
    ++i;
  }

  console.assert(i === 5);
})();
