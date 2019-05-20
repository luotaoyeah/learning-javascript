/*
 * Classes in ES6
 *     Class Methods and Accessor Properties
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * ES6 中 class 中可以定义 accessor properties, 即 getter 和 setter,
   * 它们跟 method 一样, 也是定义在 prototype 对象上的；
   */

  class AirPlane {
    constructor() {
      this._model = "foo";
      this._capacity = 99;
    }

    get model() {
      return this._model;
    }

    get capacity() {
      return this._capacity;
    }

    set capacity(value) {
      this._capacity = value;
    }
  }

  // { get: [Function: get model], set: undefined, enumerable: false, configurable: true }
  console.log(Object.getOwnPropertyDescriptor(AirPlane.prototype, "model"));
}
