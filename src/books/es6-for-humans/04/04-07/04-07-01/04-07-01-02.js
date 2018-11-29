/*
 * Classes in ES6
 *     Static Methods and Properties
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 静态方法中，不能访问实例成员；
   */

  class Person {
    constructor() {
      this.name = "foo";
      this.age = 18;
    }

    static run() {
      /*
       * 这里的 this 不是表示实例对象，而是表示构造函数的环境（context），
       * 因此，this.name 表示构造函数（类）的名称
       */
      console.log(this.name); // Person
      console.log(this.age); // undefined
    }
  }

  Person.run();
}

console.log("\n-------------------------------------------------- 02");
{
  function Person() {
    this.name = "foo";
    this.age = 18;
  }

  Person.run = function() {
    console.log(this.name); // Person
    console.log(this.age); // undefined
  };

  Person.run();
}
