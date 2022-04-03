// the-factory-pattern

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 使用工厂模式创建对象

  function createPerson(name, age) {
    var object = new Object();
    object.name = name;
    object.age = age;
    return object;
  }

  console.assert(
    JSON.stringify(createPerson('foo', 18)) ===
      JSON.stringify({
        name: 'foo',
        age: 18,
      }),
  );

  console.assert(
    JSON.stringify(createPerson('bar', 28)) ===
      JSON.stringify({
        name: 'bar',
        age: 28,
      }),
  );
})();
