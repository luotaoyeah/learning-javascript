/*
 * Destructuring
 *     Destructuring of Objects and Arrays
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 使用索引访问数组元素
   */
  const array = ["a", "b", "c"];
  const x = array[0];
  const y = array[1];
  const z = array[2];
  console.log(x, y, z); // a b c

  /*
   * 使用（.）访问对象属性
   */
  const obj = {
    a: 1,
    b: 2,
    c: 3
  };
  const a = obj.a;
  const b = obj.b;
  const c = obj.c;
  console.log(a, b, c); // 1 2 3
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 使用 destructuring 获取数组元素
   */
  const array = ["a", "b", "c"];
  const [x, y, z] = array;
  console.log(x, y, z); // a b c

  /*
   * 使用 destructuring 获取对象属性
   */
  const obj = {
    a: 1,
    b: 2,
    c: 3
  };
  const { a, b, c } = obj;
  console.log(a, b, c); // 1 2 3
}
