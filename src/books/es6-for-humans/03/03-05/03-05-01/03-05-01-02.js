/*
 * Destructuring
 *     Destructured Parameters
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 当函数参数是一个复杂的对象时，使用 object destructuring 能提高代码的可读性；
   */

  const options = {
    a: 1,
    b: 2,
    c: 3
  };

  function fn01(options) {
    console.log(options.a, options.b, options.c);
  }

  fn01(options); // 1 2 3

  /* 一眼就能看出参数对象的属性有哪些 */
  function fn02({ a, b, c }) {
    console.log(a, b, c);
  }

  fn02(options); // 1 2 3
}
