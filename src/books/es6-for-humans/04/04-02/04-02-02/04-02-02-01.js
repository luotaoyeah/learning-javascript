/*
 * Classes in ES6
 *     Defining Classes in ES6
 *         Class Expressions
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 跟 function expression 一样，
   * class 也可以使用 class expression 的方式定义，
   * 同时，可以定义 anonymous class expression
   */

  /*
   * class 关键字后面没有类名，
   * 表示它是一个 anonymous class
   */
  const Circle = class {
    constructor() {
      this.radius = 20;
    }
  };

  console.log(new Circle().radius); // 20
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 在 JS 中，function 和 class 都是一等公民（first-class），
   * class expression 跟其他 expression 一样，可以赋值给其他变量，
   * 可以作为函数的参数被传递
   */

  function carFactory(Car) {
    return new Car();
  }

  const toyota = carFactory(
    class {
      start() {
        console.log("start");
      }
    }
  );

  toyota.start(); // start
}
