/*
 * New Syntax in ES6
 *     Default Function Parameters
 *         TDZ
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 定义 function 的时候, function 的参数有它们自己的作用域（圆括号之间）,
   * 并且在该作用域中存在 TDZ, 因此把参数 y 赋值给参数 x 时,
   * 参数 y 尚未定义, 不能访问, 因此报错；
   */

  let y = "foo";

  /*
   * x = y 中的 y 是参数 y, 而不是外界的变量 y
   */
  function fn01(x = y, y = "bar") {
    console.log(x, y);
  }

  fn01(); // ReferenceError: y is not defined
}
