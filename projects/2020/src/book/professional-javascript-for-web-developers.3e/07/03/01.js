// mimicking-block-scope

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // javascript 只有 global scope 和 function scope, 没有 block scope,
  // 可以使用 IIFE(Immediately Invoked Function Expression) 来模拟 block scope

  for (var i = 0; i < 10; i++) {}

  console.assert(i === 10);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------

  (function () {
    for (var i = 0; i < 10; i++) {}
  })();

  try {
    console.assert(i === undefined);
  } catch (e) {
    console.assert(e instanceof ReferenceError);
    console.assert(e.message === 'i is not defined');
  }
})();
