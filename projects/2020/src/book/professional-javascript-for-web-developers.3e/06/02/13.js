// dynamic-prototype-pattern

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 把 prototype 对象的属性的定义, 放到 constructor 里面

  function Person() {
    this.talk = function () {
      return 'talking';
    };

    // 避免重复定义
    if (typeof Person.prototype.walk !== 'function') {
      Person.prototype.walk = function () {
        return 'walking';
      };
    }
  }

  var person01 = new Person();
  var person02 = new Person();

  console.assert(person01.walk === person02.walk);
  console.assert(person01.walk() === 'walking');
})();
