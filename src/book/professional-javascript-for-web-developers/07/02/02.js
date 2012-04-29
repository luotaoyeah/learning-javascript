// closures-and-variables

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如果 outer 中返回多个 inner, 则这些 inner 引用的都是同一个 outer scope 对象

  function outer() {
    var items = [];

    for (var i = 0; i < 5; i++) {
      items[i] = function () {
        return i;
      };
    }

    return items;
  }

  var inners = outer();

  console.assert(
    JSON.stringify(
      inners.map(function (inner) {
        return inner();
      }),
    ) === JSON.stringify([5, 5, 5, 5, 5]),
  );
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 对于上面的问题, 我们可以在 inner 中再创建一个 closure, 并利用 function 的 pass by value 特性

  function outer() {
    var items = [];

    for (var i = 0; i < 5; i++) {
      items[i] = (function inner01(_i) {
        return function inner02() {
          return _i;
        };
      })(i); // 这里的参数 i 是 pass by value
    }

    return items;
  }

  var inners = outer();

  console.assert(
    JSON.stringify(
      inners.map(function (inner) {
        return inner();
      }),
    ) === JSON.stringify([0, 1, 2, 3, 4]),
  );
})();
