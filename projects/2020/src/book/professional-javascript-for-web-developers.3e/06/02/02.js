// the-constructor-pattern

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  var person = new Person('foo', 18);

  console.assert(
    JSON.stringify(person) ===
      JSON.stringify({
        name: 'foo',
        age: 18,
      }),
  );

  // `Object.prototype.constructor` 属性, 表示该对象的构造函数
  console.assert(person.constructor === Person);

  console.assert(person instanceof Object);
  console.assert(person instanceof Person);
})();
