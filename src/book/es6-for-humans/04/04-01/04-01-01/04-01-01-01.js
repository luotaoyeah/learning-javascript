/*
 * Classes in ES6
 *     Classes in ES6
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * ES6 中的 class 跟传统的面向对象的语言的 class 不完全一样,
   * 它实际上还是一个 function, 底层是通过 prototype 来实现的,
   * 本质上, 它只是一个语法糖；
   */

  class Car {
    constructor(brand) {
      this.brand = brand;
    }
  }

  const car = new Car("tesla");
  console.log(car.hasOwnProperty("brand")); // true
  /* class 本质上是一个 function */
  console.log(typeof Car); // function
}
