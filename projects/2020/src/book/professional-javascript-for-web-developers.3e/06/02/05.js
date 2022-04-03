// the-prototype-pattern

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 任何函数都有一个 `prototype` 属性, 称之为原型对象,
  // 原型对象上的属性和方法, 会被所有的实例对象共享

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.run = function () {
    return 'running';
  };

  var person01 = new Person('foo', 18);
  var person02 = new Person('bar', 28);

  console.assert(person01.run === person02.run);
  console.assert(person01.run === Person.prototype.run);
})();
