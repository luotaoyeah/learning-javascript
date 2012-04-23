// prototypes-and-the-in-operator

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `in` 操作符,
  // 如果属性是 instance property 或者 prototype property, 则返回 `true`

  function Person(a) {
    this.a = a;
  }

  Person.prototype.b = 'b';

  var person = new Person();
  Object.defineProperty(person, 'c', {
    value: 'c',
    enumerable: false,
  });
  Object.defineProperty(Person.prototype, 'd', {
    value: 'd',
    enumerable: false,
  });

  console.assert('a' in person); // enumerable instance property
  console.assert('b' in person); // enumerable prototype property
  console.assert('c' in person); // non-enumerable instance property
  console.assert('d' in person); // non-enumerable prototype property

  console.assert('e' in person === false);
})();
