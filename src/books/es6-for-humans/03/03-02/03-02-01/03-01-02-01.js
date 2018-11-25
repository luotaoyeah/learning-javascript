/*
 * Destructuring
 *     Default Values
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 使用对象解构时，如果对应的属性不存在，
   * 则解构出来的值为 undefined；
   */
  const { x, y, z } = {
    x: 1,
    y: 2
  };
  console.log(x, y, z); // 1 2 undefined
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 可以设置变量的默认值，
   * 当对应的属性不存在（或者属性值为 undefined）时，就会使用该默认值；
   * 类似函数参数的默认值；
   */
  const { x, y, z = 3 } = {
    x: 1,
    y: 2
  };
  console.log(x, y, z); // 1 2 3

  /* 非简写模式下，设置默认值 */
  const { a, b: B = 2 } = { a: 1 };
  console.log(a, B); // 1 2
}

console.log("\n-------------------------------------------------- 03");
{
  /*
   * 尽量不要在非简写模式中设置默认值，
   * 尽量不要在默认值中使用 object literal 或者 array literal，
   * 否则代码可读性会很差；
   */
  let a = 1;
  let b = 2;
  let c = 3;

  let obj = {
    a: { b: 42 },
    c: { b: c }
  };

  ({ b: a = { b: b } } = obj);
  ({ c: b = { b: c } } = obj);
  ({ a: c = { b: a } } = obj);

  console.log(a.b, b.b, c.b); // 2 3 42
}
