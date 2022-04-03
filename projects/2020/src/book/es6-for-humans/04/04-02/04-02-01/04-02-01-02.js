/*
 * Classes in ES6
 *     Defining Classes in ES6
 *         Class Declarations
 *             TDZ
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 虽然 class 本质上是一个 function,
   * 但是 class 的定义不存在变量提升（hoisting）,
   * 跟 let 和 const 一样, class 存在 TDZ, 必须先声明, 再使用；
   */

  const bike = new Bike(); // ReferenceError: Bike is not defined

  class Bike {}
}
