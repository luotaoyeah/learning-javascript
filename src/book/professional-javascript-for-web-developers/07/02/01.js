// closures

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // closure 是一种特殊的 function,
  // 当 outer 执行完毕返回 inner 之后, inner 依然保留对 outer scope 的引用,
  // 因此 outer scope 不会被销毁, 从而形成一个 closure

  function outer(x) {
    var y = 2;

    return function (z) {
      return x + y + z;
    };
  }

  var inner = outer(1);

  console.assert(inner(2) === 5);
  console.assert(inner(7) === 10);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 如果 outer scope 中的某个属性值是一个对象, 则我们在外部修改这个对象的属性, 会影响 closure 里面

  var obj = { x: 1 };

  function outer(_obj) {
    var y = 2;

    return function (z) {
      return _obj.x + y + z;
    };
  }

  var inner = outer(obj);

  console.assert(inner(2) === 5);
  console.assert(inner(7) === 10);

  obj.x = 6;
  console.assert(inner(2) === 10);
  console.assert(inner(7) === 15);
})();
