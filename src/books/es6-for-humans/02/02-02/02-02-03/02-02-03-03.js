/*
 * New Syntax in ES6
 *     Arrow Functions
 *         this in Arrow Functions
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * arrow function 的参数列表和 => 必须在同一行；
   */
  const fn01 = ()
    => {}; // SyntaxError: Unexpected token =>
}
