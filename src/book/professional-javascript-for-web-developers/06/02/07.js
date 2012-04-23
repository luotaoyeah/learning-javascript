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

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `for/in` 循环,
  // 如果属性是 enumerable instance property 或者 enumerable prototype property, 则可以被遍历

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

  var keys = [];

  for (var key in person) {
    keys.push(key);
  }

  console.assert(JSON.stringify(keys) === JSON.stringify(['a', 'b']));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Object.keys()` 返回 enumerable instance property 属性名的数组

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

  console.assert(JSON.stringify(Object.keys(person)) === JSON.stringify(['a']));
})();

(function () {
  // ----------------------------------------------------------------------------------------------------
  // `Object.getOwnPropertyNames()` 返回 instance property 属性名的数组

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

  console.assert(JSON.stringify(Object.getOwnPropertyNames(person)) === JSON.stringify(['a', 'c']));
})();
