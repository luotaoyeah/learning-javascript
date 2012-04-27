// passing-arguments

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 在子类的 constructor 中调用父类的 constructor 时, 可以传入其他参数

  function Parent(x) {
    this.x = x;
  }

  function Child(x, y) {
    Parent.call(this, x);

    this.y = y;
  }

  var child = new Child(1, 2);

  console.assert(child.x === 1);
  console.assert(child.y === 2);

  console.assert(child.hasOwnProperty('x'));
  console.assert(child.hasOwnProperty('y'));
})();
