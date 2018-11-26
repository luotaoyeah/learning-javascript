/*
 * Destructuring
 *     Destructured Parameters
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 函数参数使用 object destructure 时，
   * 因为对象的属性没有特定的顺序，因此参数对象的属性可以是任意的顺序，
   * 同时可以省略参数对象的任意属性；
   */

  function fn01({ a, b, c }) {
    console.log(a, b, c);
  }

  fn01({
    c: 3,
    a: 1,
    b: 2
  }); // 1 2 3

  fn01({ c: 3 }); // undefined undefined 3
}
