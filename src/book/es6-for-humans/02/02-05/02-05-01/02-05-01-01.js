/*
 * New Syntax in ES6
 *     Object Literal Extensions
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 使用变量值初始化 object literal 时, 如果变量名跟属性名一样,
   * 则可以使用简写的形式；
   */

  const price = 4.2;
  const quantity = 20;

  const obj01 = { price: price, quantity: quantity };
  console.log(obj01); // { price: 4.2, quantity: 20 }

  /* 使用简写 */
  const obj02 = { price, quantity };
  console.log(obj02); // { price: 4.2, quantity: 20 }
}
