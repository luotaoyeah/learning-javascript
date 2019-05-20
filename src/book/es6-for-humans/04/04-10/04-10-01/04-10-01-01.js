/*
 * Classes in ES6
 *     Method Overriding
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 在子类中声明同名的方法, 会覆盖父类中同名的方法
   */

  class Person {
    run() {
      console.log("person.run");
    }
  }

  class Boy extends Person {
    run() {
      console.log("boy.run");
    }
  }

  new Boy().run(); // boy.run
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   *
   */

  class Person {
    run() {
      console.log("person.run");
    }
  }

  class Boy extends Person {
    run() {
      /*
       * 在子类的方法中, 可以通过 super 调用父类的方法
       */
      super.run();
      console.log("boy.run");
    }
  }

  // person.run
  // boy.run
  new Boy().run();
}

console.log("\n-------------------------------------------------- 03");
{
  class Person {
    run() {
      console.log("person.run");
    }

    walk() {
      console.log("person.walk");
    }
  }

  class Boy extends Person {
    walk() {
      console.log("boy.walk");
    }

    sing() {
      /*
       * 如果方法是继承自父类（如下面的 run() 方法）, 及子类没有覆盖,
       * 则通过 super 和通过 this 调用的是同一个方法
       */
      console.log(this.run === super.run); // true
      console.log(this.walk === super.walk); // false
    }
  }

  new Boy().sing();
}
