/*
 * Destructuring
 *     Nested Destructuring
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 在解构嵌套属性时,
   * 当某层属性（如下的 a）找不到对应的属性时, 该属性值为 undefined,
   * 则后面的解构会报错；
   */
  const {
    a: {
      b: { c }
    }
  } = {};
  console.log(c); // TypeError: Cannot destructure property `b` of 'undefined' or 'null'.
}
