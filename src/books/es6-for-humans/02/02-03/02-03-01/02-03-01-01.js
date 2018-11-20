/*
 * New Syntax in ES6
 *     Default Function Parameters
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 因为 function 的实参跟 function 的形参可以不匹配，
   * 当声明的形参没有被传递实参时，其值为 undefined，
   * 因此通常需要在 function 中检查参数是否传递，
   * 当没有传递时，需要设置默认值；
   */
  function fn01(x, y, z) {
    /*
     * 在 function 中手动判断并设置默认值
     */
    x = x || 1;
    y = y || 2;
    z = z || 3;

    console.log(x, y, z);
  }

  fn01(); // 1 2 3
  fn01(9); // 9 2 3
  fn01(9, 9); // 9 9 3
  fn01(9, 9, 9); // 9 9 9
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * ES6 提供了默认参数的语法，
   * 在定义 function 时，可以声明参数的默认值；
   */

  function fn01(x = 1, y = 2, z = 3) {
    console.log(x, y, z);
  }

  fn01(); // 1 2 3
  fn01(9); // 9 2 3
  fn01(9, 9); // 9 9 3
  fn01(9, 9, 9); // 9 9 9
}
