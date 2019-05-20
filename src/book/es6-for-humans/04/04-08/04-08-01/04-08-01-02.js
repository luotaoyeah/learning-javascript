/*
 * Classes in ES6
 *     Class Inheritance and the Super Keyword
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 当子类中没有定义构造函数时, 会自动创建一个构造函数,
   * 该构造函数中会自动调用 super() 方法,
   * 调用 super() 方法时的参数为传入该构造函数的参数
   */

  class Person {
    constructor(name) {
      this.name = name;
    }
  }

  class Boy extends Person {}

  console.log(new Boy("foo").name); // foo

  class Girl extends Person {
    constructor(...args) {
      super(...args);
    }
  }

  console.log(new Girl("bar").name); // bar
}
