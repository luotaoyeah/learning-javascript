// constructors-as-functions

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // constructor 本质上是一个 function, 只是调用时前面加了 `new`,
  // constructor 也可以当成普通函数调用

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  var person01 = {};

  Person.call(person01, 'foo', 18);

  console.assert(
    JSON.stringify(person01) ===
      JSON.stringify({
        name: 'foo',
        age: 18,
      }),
  );

  console.assert(person01.constructor === Object);
  console.assert(person01 instanceof Person === false);
})();
