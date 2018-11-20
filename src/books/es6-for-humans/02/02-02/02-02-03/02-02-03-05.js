/*
 * New Syntax in ES6
 *     Arrow Functions
 *         this in Arrow Functions
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * arrow function 没有 prototype 属性；
   */

  console.log((() => {}).hasOwnProperty("prototype")); // false
}
