// functions-internals

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 函数中的 `this` 定义在 execution context 对象上, 因此在执行时才能确定,
  // 同一个函数在不同的 execution context 中执行时, `this` 不一定相同

  function fn01() {
    return this.x;
  }

  console.assert(fn01() === undefined);

  var obj01 = {
    x: 1,
    fn01: fn01,
  };
  console.assert(obj01.fn01() === 1);

  var obj02 = {
    x: 2,
    fn01: fn01,
  };
  console.assert(obj02.fn01() === 2);

  console.assert(obj01.fn01 === obj02.fn01);
})();
