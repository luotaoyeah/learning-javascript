// combination-inheritance

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 同时使用 constructor stealing 和 prototype chain

  function Parent(x) {
    this.x = x || 0;
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

  console.assert(child01.x === 1);
  delete child01.x;
  console.assert(child01.x === 0);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 上面的实现有一个问题: 父类的 instance property 和子类的 instance property 重复定义了,
  // 可以如下解决

  function Parent(x) {
    this.x = x;
  }

  Parent.prototype.walk = function () {
    return 'walking';
  };

  function Child(x, y) {
    Parent.call(this, x);

    this.y = y;
  }

  Child.prototype = Object.create(Parent.prototype);

  Child.prototype.talk = function () {
    return 'talking';
  };

  var child01 = new Child(1, 2);
  var child02 = new Child(3, 4);

  console.assert(child01.walk === child02.walk);
  console.assert(child01.talk === child02.talk);

  console.assert(child01.x === 1);
  delete child01.x;
  console.assert(child01.x === undefined);
})();
