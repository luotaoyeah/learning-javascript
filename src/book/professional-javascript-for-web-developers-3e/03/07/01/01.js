// understanding-arguments

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 函数的形参个数和实参个数可以不同

  console.assert(
    (function (x) {
      return x + 1;
    })(1, 2) === 2,
  );
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 在函数中可以通过 `arguments` 访问所有实参

  (function () {
    console.assert(arguments[0] === 'a');
    console.assert(arguments[1] === 'b');
    console.assert(arguments[2] === 'c');
  })('a', 'b', 'c');
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `arguments` 是一个 array-like object

  (function () {
    console.assert(arguments instanceof Array === false);

    console.assert(arguments.length === 3);

    console.assert(
      JSON.stringify(arguments) ===
        JSON.stringify({
          0: 'a',
          1: 'b',
          2: 'c',
        }),
    );
  })('a', 'b', 'c');
})();

(function (x, y) {
  // ----------------------------------------------------------------------------------------------------
  // 未传值的参数值为 `undefined`

  console.assert(x === 1);
  console.assert(y === undefined);
})(1);

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 函数参数是值传递,
  // 如果参数是一个对象, 传递的时候使用的是浅拷贝 (shallow copy)

  var x = 1;
  var obj01 = { x: 1 };
  var obj02 = { x: 1 };

  (function (_x, _obj01, _obj02) {
    _x = 2;
    _obj01 = { x: 2 };
    _obj02.x = 2;
  })(x, obj01, obj02);

  console.assert(x === 1);
  console.assert(obj01.x === 1);
  console.assert(obj02.x === 2);
})();
