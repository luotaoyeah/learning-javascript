/*
 * Classes in ES6
 *     Inheriting Static Properties
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 子类会继承父类的静态方法和静态属性
   */

  class Person {
    static run() {
      console.log("run");
    }
  }

  class Boy extends Person {}

  Boy.run(); // run

  console.log(Person.run === Boy.run); // true
  console.log(Person.hasOwnProperty("run")); // true
  console.log(Boy.__proto__.hasOwnProperty("run")); // true
}
