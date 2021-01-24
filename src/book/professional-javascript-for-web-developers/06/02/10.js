// native-object-prototypes

'use strict';

(function () {
  // ----------------------------------------------------------------------------------------------------
  // 内置类型的 prototype 对象可以被修改

  /**
   * 判断一个属性是否是一个 prototype 属性
   * @param key
   * @return {boolean}
   */
  Object.prototype.hasPrototypeProperty = function (key) {
    return !this.hasOwnProperty(key) && key in this;
  };

  function Person(a) {
    this.a = a;
  }

  Person.prototype.b = 'b';

  console.assert(new Person().hasOwnProperty('a'));
  console.assert(new Person().hasPrototypeProperty('b'));
})();
