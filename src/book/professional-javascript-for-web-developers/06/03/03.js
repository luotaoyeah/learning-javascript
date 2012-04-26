// prototype-and-instance-relationships

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 有两种方式判断 instance 和 prototype/constructor 之间的关系:
  //   1. instanceof
  //   2. Object.prototype.isPrototypeOf()

  function Person() {}
  function Boy() {}

  Boy.prototype = new Person();

  var boy = new Boy();

  console.assert(boy instanceof Object);
  console.assert(boy instanceof Person);
  console.assert(boy instanceof Boy);

  console.assert(Object.prototype.isPrototypeOf(boy));
  console.assert(Person.prototype.isPrototypeOf(boy));
  console.assert(Boy.prototype.isPrototypeOf(boy));
})();
