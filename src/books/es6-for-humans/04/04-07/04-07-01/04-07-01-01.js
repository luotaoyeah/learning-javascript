/*
 * Classes in ES6
 *     Static Methods and Properties
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 使用 static 关键字，可以定义静态方法；
   * 静态方法是直接定义在 class 上面，而不是 class 的实例上面；
   */

  class Person {
    static run() {
      console.log("run");
    }

    walk() {
      console.log("walk");
    }
  }

  Person.run(); // run
  console.log(Person.hasOwnProperty("run")); // true

  const person = new Person();
  person.walk(); // walk
  console.log(Person.hasOwnProperty("walk")); // false
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 使用 ES5 的方式定义静态方法；
   */

  function Person() {}

  Person.run = function() {
    console.log("run");
  };

  Person.prototype.walk = function() {
    console.log("walk");
  };

  Person.run(); // run
  new Person().walk(); // walk
}
