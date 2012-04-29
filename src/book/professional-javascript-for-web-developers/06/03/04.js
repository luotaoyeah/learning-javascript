// constructor-stealing

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 当我们使用 prototype chain 来实现继承时, 父类的 instance property 会变成子类的 prototype property

  function Parent() {
    this.items = ['a', 'b', 'c'];
  }

  function Child() {}

  Child.prototype = new Parent();

  var child01 = new Child();
  var child02 = new Child();

  console.assert(child01 instanceof Parent === true);
  console.assert(child01.items === child02.items);
  console.assert(child01.items === Child.prototype.items);

  child01.items.shift();
  console.assert(JSON.stringify(child01.items) === JSON.stringify(['b', 'c']));
  console.assert(JSON.stringify(child02.items) === JSON.stringify(['b', 'c']));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 可以在子类的 constructor 中调用父类的 constructor, 并传入子类的 `this`,
  // 这样父类的 instance property 就也成了子类的 instance property,
  // 此时是把父类的 constructor 当成普通的 function 来调用, 子类和父类之间没有 prototype chain

  function Parent() {
    this.items = ['a', 'b', 'c'];
  }

  function Child() {
    Parent.call(this);
  }

  var child01 = new Child();
  var child02 = new Child();

  console.assert(child01 instanceof Parent === false);
  console.assert(child01.items !== child02.items);
  console.assert(child01.items !== Child.prototype.items);

  child01.items.shift();
  console.assert(JSON.stringify(child01.items) === JSON.stringify(['b', 'c']));
  console.assert(JSON.stringify(child02.items) === JSON.stringify(['a', 'b', 'c']));
})();
