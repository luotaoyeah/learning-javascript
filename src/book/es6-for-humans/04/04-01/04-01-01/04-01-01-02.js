/*
 * Classes in ES6
 *     Classes in ES6
 *         define method
 */

console.log("\n-------------------------------------------------- 01");
{
  class Car {
    constructor(brand) {
      this.brand = brand;
    }

    /*
     * 在 class 中定义 method 时, 不需要使用 function 关键字；
     */
    start() {
      console.log(this.brand);
    }
  }

  const car01 = new Car("tesla");
  car01.start(); // tesla

  /*
   * class 中的 method 是定义在 class 的 prototype 对象上的；
   */
  console.log(car01.hasOwnProperty("start")); // false
  console.log(Car.prototype.hasOwnProperty("start")); // true

  const car02 = new Car("bmw");
  console.log(car01.start === car02.start); // true
}
