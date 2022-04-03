/*
 * Destructuring
 *     Destructuring of Objects and Arrays
 *         Object Destructuring Syntax
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 对于 object destructuring, 当变量名跟属性名相同时, 可以简写；
   */

  const { a: a, b: b, c: c } = {
    a: 1,
    b: 2,
    c: 3
  };
  console.log(a, b, c); // 1 2 3

  /* 简写 */
  const { x, y, z } = {
    x: 1,
    y: 2,
    z: 3
  };
  console.log(x, y, z); // 1 2 3
}
