/*
 * Classes in ES6
 *     Defining Classes in ES6
 *         Class Declarations
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 在使用 class declaration 方式定义 class 时,
   * 在 class 的内部, 类名相当于一个常量,
   * 不能给类名重新赋值, 否则报错；
   */

  class SimpleClass {
    constructor() {
      /*
       * 在 class 内部, 类名 SimpleClass 代表的标识符（类名变量）,
       * 相当于时一个常量, 不能修改；
       */
      SimpleClass = "42"; // TypeError: Assignment to constant variable.
    }
  }

  /*
    const simpleClass = new SimpleClass();
  */
}

console.log("\n-------------------------------------------------- 02");
{
  class SimpleClass {}

  /*
   * 在 class 的外部, 可以给类名变量重新赋值；
   */
  SimpleClass = "42";
  console.log(SimpleClass); // 42
}
