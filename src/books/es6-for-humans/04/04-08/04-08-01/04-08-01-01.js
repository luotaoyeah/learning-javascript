/*
 * Classes in ES6
 *     Class Inheritance and the Super Keyword
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 使用 extends 关键字可以实现 class 之间的继承
   */

  class Person {
    constructor(name) {
      this.name = name;
    }

    say() {
      console.log("say");
    }
  }

  class Boy extends Person {
    constructor(name, age) {
      /*
       * 使用 super() 调用父类的构造函数，
       * 必须在使用 this 之前调用 super() 方法
       */
      super(name);
      this.age = age;
    }

    run() {
      console.log("run");
    }
  }

  const boy = new Boy("tom", 18);
  boy.say(); // say
  boy.run(); // run
  console.log(boy.name); // tom
  console.log(boy.age); // 18
}
