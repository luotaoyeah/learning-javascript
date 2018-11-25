/*
 * Destructuring
 *     Nested Destructuring
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 对于嵌套的属性，也可以使用解构；
   */

  const {
    a: {
      b: { c: c01 }
    }
  } = { a: { b: { c: 9 } } };
  console.log(c01); // 9

  const [
    {
      a: {
        b: { c: c02 }
      }
    }
  ] = [{ a: { b: { c: 9 } } }];
  console.log(c02); // 9
}
