// prototype-chaining

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // prototype 本身也是一个 instance, 它可以指向另一个 prototype, 最终组成一个 prototype chain

  function Person() {
    this.p01 = 'a';
  }

  Person.prototype.fn01 = function () {
    return this.p01;
  };

  function Boy() {
    this.p02 = 'b';
  }

  Boy.prototype = new Person();
  Boy.prototype.fn02 = function () {
    return this.p02;
  };

  var boy = new Boy();
  console.assert(boy.fn01() === boy.p01);
  console.assert(boy.fn02() === boy.p02);
})();
