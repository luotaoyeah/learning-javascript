/*
 * Classes in ES6
 *     Computed Method Names
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 跟 object literal 类似，class 中的 method 的 name 也可以使用 [] 形式动态计算；
   */

  const propName = "color";
  const methodName = "getColor";

  class AirPlane {
    constructor(color) {
      this._color = color;
    }

    [methodName]() {
      return this[`_${propName}`];
    }

    get [propName]() {
      return this[`_${propName}`];
    }

    set [propName](value) {
      this[`_${propName}`] = value;
    }
  }

  const airPlane = new AirPlane("red");
  console.log(airPlane[methodName]()); // red
  airPlane[propName] = "blue";
  console.log(airPlane[propName]); // blue
}
