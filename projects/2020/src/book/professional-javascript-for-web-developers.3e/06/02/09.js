// dynamic-nature-of-prototypes

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 实例对象通过 `[[Prototype]]` 内部属性, 连接 prototype 对象,
  // 实例对象跟 constructor 之间没有直接的连接

  function Person() {}

  var person = new Person();
  console.assert(person instanceof Person === true);

  // 覆写 prototype 对象之后, 之前创建的实例对象跟 constructor 就失联了
  Person.prototype = {};
  console.assert(person instanceof Person === false);

  console.assert(new Person() instanceof Person === true);
})();
