// alternate-prototype-syntax

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 可以直接赋值给 prototype 一个新的对象, 并手动添加 constructor 属性

  function Person(a) {
    this.a = a;
  }

  Person.prototype = {
    b: 'b',
  };
  Object.defineProperty(Person.prototype, 'constructor', {
    value: Person,
    enumerable: false,
  });

  var person = new Person();
  console.assert(person instanceof Person);
  console.assert(person instanceof Object);
})();
