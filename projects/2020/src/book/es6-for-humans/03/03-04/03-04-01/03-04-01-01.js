/*
 * Destructuring
 *     Destructuring Using the rest Syntax
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 解构中可以使用 rest operator（...）,
   * 但是必须用在最后一个变量；
   */

  const [x, y, ...z] = [1, 2, 3, 4, 5];
  console.log(x, y, z); // 1 2 [ 3, 4, 5 ]

  const { a, c, ...d } = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
  };
  console.log(a, c, d); // 1 3 { b: 2, d: 4, e: 5 }
}
