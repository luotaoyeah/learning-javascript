/*
 * Classes in ES6
 *     Class Methods and Accessor Properties
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * ES6 中的 class 中的 method 是定义在 prototype 上面的, 是 non-enumerable 的；
   */

  class AirPlane {
    constructor() {
      this.model = "foo";
      this.capacity = 99;
    }

    getData() {
      console.log(this.model, this.capacity);
    }
  }

  const airPlane = new AirPlane();
  console.log(airPlane.hasOwnProperty("getData")); // false
  console.log(airPlane.__proto__.hasOwnProperty("getData")); // true
  console.log(Object.getPrototypeOf(airPlane).hasOwnProperty("getData")); // true
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 使用 ES5 的方式实现同样的功能
   */
  function AirPlane() {
    this.model = "foo";
    this.capacity = 99;
  }

  AirPlane.prototype.getData = function() {
    console.log(this.model, this.capacity);
  };

  const airPlane = new AirPlane();
  console.log(airPlane.hasOwnProperty("getData")); // false
  console.log(airPlane.__proto__.hasOwnProperty("getData")); // true
}
