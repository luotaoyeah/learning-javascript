/*
 * Destructuring
 *     Destructuring of Objects and Arrays
 *         Object Destructuring Syntax
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 如下的 object destructuring 语法中,
   *     前面的 a 为 pattern, 表示对应的属性,
   *     后面的 a 为 variable, 表示声明的变量；
   */
  const obj = { a: 1 };

  const { a: a } = obj;
  console.log(a); // 1
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 可以将某个属性同时解构到多个变量中；
   */

  /* 将属性 a 解构到变量 x, y, z 中 */
  const { a: x, a: y, a: z } = { a: 1 };
  console.log(x, y, z); // 1 1 1
}
