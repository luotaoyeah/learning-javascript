/*
 * New Syntax in ES6
 *     Default Function Parameters
 *         arguments
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * function 中的 arguments 对象表示实参,
   * 所以当某个形参使用的是默认值时, arguments 对象中不会包含该参数；
   * 除非是显式地传递了 undefined
   */
  function fn01(x = "foo", y = "bar") {
    console.log(arguments);
  }

  fn01("foo"); // [Arguments] { '0': 'foo' }
}
