// combination-inheritance

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 同时使用 constructor stealing 和 prototype chain

  function Parent(x) {
    this.x = x;
    this.items = ['a', 'b', 'c'];
  }

  Parent.prototype.walk = function () {
    return 'walking';
  };

  function Child(x, y) {
    Parent.call(this, x);

    this.y = y;
  }

  Child.prototype = new Parent();
  Child.prototype.talk = function () {
    return 'talking';
  };

  var child01 = new Child(1, 2);
  var child02 = new Child(3, 4);

  console.assert(child01.items !== child02.items);
  console.assert(child01.walk === child02.walk);
  console.assert(child01.talk === child02.talk);
})();
