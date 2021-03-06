// functions

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如果 `return` 后面没有数据, 则返回值为 `undefined`

  console.assert(
    (function () {
      return;
    })() === undefined,
  );
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如果没有 `return` 语句, 则返回值为 `undefined`

  console.assert((function () {})() === undefined);
})();

// 由于语法错误 (SyntaxError) 不能被 try/catch 捕获,
// 下面的代码使用 `eval()` 解析, 从而捕获 `SyntaxError`

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 严格模式下, 参数不能同名, 否则语法错误

  try {
    eval('(function(x, x) {})();');
  } catch (e) {
    console.assert(e instanceof SyntaxError);
    console.assert(e.message === 'Duplicate parameter name not allowed in this context');
  }
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 严格模式下, 函数名不能为 `eval` / `arguments`, 否则语法错误

  try {
    eval('(function eval() {})();');
  } catch (e) {
    console.assert(e instanceof SyntaxError);
    console.assert(e.message === 'Unexpected eval or arguments in strict mode');
  }

  try {
    eval('(function arguments() {})();');
  } catch (e) {
    console.assert(e instanceof SyntaxError);
    console.assert(e.message === 'Unexpected eval or arguments in strict mode');
  }
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 严格模式下, 参数名不能为 `eval` / `arguments`, 否则语法错误

  try {
    eval('(function(eval, arguments) {})();');
  } catch (e) {
    console.assert(e instanceof SyntaxError);
    console.assert(e.message === 'Unexpected eval or arguments in strict mode');
  }
})();
