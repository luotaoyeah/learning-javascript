// problems-with-prototypes

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // prototype 的一个问题: prototype 对象上的属性和方法会被所有实例对象共享

  function Person() {}

  Person.prototype.items = ['a', 'b'];

  var person01 = new Person();
  var person02 = new Person();
  console.assert(JSON.stringify(person01.items) === JSON.stringify(['a', 'b']));
  console.assert(JSON.stringify(person02.items) === JSON.stringify(['a', 'b']));

  person01.items.shift();
  console.assert(JSON.stringify(person01.items) === JSON.stringify(['b']));
  console.assert(JSON.stringify(person02.items) === JSON.stringify(['b']));
})();
