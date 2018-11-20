/*
 * New Syntax in ES6
 *     Default Function Parameters
 *         dynamic function
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 当使用 Function 构造函数创建 dynamic function 时，
   * 也可以定义 default parameter
   */

  const fn01 = new Function("x", "y = 'bar'", "console.log(x, y);");
  fn01("foo"); // foo bar
}
