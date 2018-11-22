/*
 * New Syntax in ES6
 *     Rest and Spread Operators
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 使用 Function 构造函数创建 dynamic function 时，
   * 也可以定义 rest parameter；
   */

  const fn01 = new Function("...args", "return args[0];");
  console.log(fn01("a", "b", "c")); // a
}
