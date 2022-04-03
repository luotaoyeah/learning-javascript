// static-private-variables

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 使用 constructor + closure 来模拟私有属性, 这些属性都是 instance property,
  // 使用 iife + constructor + closure 来模拟私有属性, 这些属性都是 prototype property

  var Person = (function () {
    var _name;

    function Person(name) {
      _name = name;
    }

    Person.prototype.getName = function () {
      return _name;
    };

    Person.prototype.setName = function (value) {
      _name = value;
    };

    return Person;
  })();

  console.assert(new Person().getName === new Person().getName);
})();
