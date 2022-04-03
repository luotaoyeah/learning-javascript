// function-expressions

(function () {
  // ----------------------------------------------------------------------------------------------------
  // function declaration 和 function expression 的区别:
  //   function declaration 会 hoist, function expression 不会 hoist

  console.assert(fn01() === 1);

  function fn01() {
    return 1;
  }

  try {
    console.assert(fn02() === 2);
    var fn02 = function () {
      return 2;
    };
  } catch (e) {
    console.assert(e instanceof TypeError);
    console.assert(e.message === 'fn02 is not a function');
  }
})();

(function () {
  // ----------------------------------------------------------------------------------------------------

  // 对于 function declaration, `Function.prototype.name` 属性的值为 `function` 关键字后面的值
  function fn01() {}
  console.assert(fn01.name === 'fn01');

  // 对于 anonymous function declaration, `Function.prototype.name` 属性的值为 ""
  function fn01() {}
  console.assert(function () {}.name === '');

  // 对于 named function expression, `Function.prototype.name` 属性的值为 `function` 关键字后面的值
  var fn02 = function foo() {};
  console.assert(fn02.name === 'foo');

  // 对于 anonymous function expression, `Function.prototype.name` 属性的值为变量名
  var fn04 = function () {};
  console.assert(fn04.name === 'fn04');
})();
