// how-prototypes-work

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 实例对象上的 `[[Prototype]]` 属性, 指向它的 prototype 对象,
  // 但是不能直接访问这个内部属性

  function Person() {}

  // 获取 prototype 对象的三种方式
  console.assert(Person.prototype === Person.prototype);
  console.assert(Person.prototype === new Person().constructor.prototype);
  console.assert(Person.prototype === Object.getPrototypeOf(new Person()));

  // 获取 constructor 的三种方式
  console.assert(Person === Person);
  console.assert(Person === Person.prototype.constructor);
  console.assert(Person === new Person().constructor);

  // 判断是否是 prototype 对象
  console.assert(Person.prototype.isPrototypeOf(new Person()) === true);
  console.assert(Object.prototype.isPrototypeOf(new Person()) === true);
})();

(function () {
  // ----------------------------------------------------------------------------------------------------

  function Person() {}

  Person.prototype.name = 'foo';

  var person = new Person();

  // 访问对象属性, 如果该属性在对象上不存在, 则会去它的 prototype 对象上找
  console.assert(person.name === 'foo');

  // 如果对象上有该属性, 则不会去 prototype 对象上找,
  // 相当于对象上的该属性覆盖了 prototype 对象上的同名属性
  person.name = 'bar';
  console.assert(person.name === 'bar');
  console.assert(Object.getPrototypeOf(person).name === 'foo');

  // 如果用 delete 从对象上删除该属性, 则又会去 prototype 对象上找
  delete person.name;
  console.assert(person.name === 'foo');
})();
