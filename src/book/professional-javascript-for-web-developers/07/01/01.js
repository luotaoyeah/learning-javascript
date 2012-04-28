// recursion

(function () {
  // ----------------------------------------------------------------------------------------------------
  // function expression 有一个特性: 后面的函数可以定义名称,
  // 这个函数名称只能在函数里面使用, 不能在函数外面使用

  var foo = function bar() {
    // 在函数里面可以访问这个函数名称
    console.assert(bar.name === 'bar');
  };

  console.assert((foo.name = 'bar'));

  try {
    // 在外面不能访问这个函数名称
    console.log(bar);
  } catch (e) {
    console.assert(e instanceof ReferenceError);
    console.assert(e.message === 'bar is not defined');
  }
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 使用 function declaration 实现递归, 可能存在如下问题:
  //   将函数赋值给变量, 再将函数引用赋值为空, 则里面的递归函数调用也就为空

  function factorial(n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  var factorial01 = factorial;
  // 将函数引用赋值为空
  factorial = null;

  try {
    factorial01(2);
  } catch (e) {
    console.assert(e instanceof TypeError);
    console.assert(e.message === 'factorial is not a function');
  }
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 使用 named function expression 可以解决上面的问题,
  // 因为 named function expression 的函数引用不能被外部访问, 不能在外面被赋值为空

  var factorial01 = function factorial(n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  };

  var factorial02 = factorial01;
  factorial01 = null;

  console.assert(factorial02(5) === 120);
})();
