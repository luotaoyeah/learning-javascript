// combination-constructor-prototype-pattern

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 同时定义 instance property 和 prototype property

  function Person(a) {
    this.a = a;

    this.walk = function () {
      return 'walking';
    };
  }

  Person.prototype = {
    constructor: Person,
    b: 'b',
    talk: function () {
      return 'talking';
    },
  };

  var person = new Person();
  console.assert(person.walk() === 'walking');
  console.assert(person.talk() === 'talking');
})();
