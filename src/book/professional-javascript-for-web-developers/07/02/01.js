// closures

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
