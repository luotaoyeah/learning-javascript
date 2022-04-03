/*
 * New Syntax in ES6
 *     Object Literal Extensions
 *         dynamic field name
 */

console.log('\n-------------------------------------------------- 01');
{
  /*
   * object literal 中的属性名可以是 dynamic 的；
   */

  const name = 'foo';

  const obj = {
    name,
    /* 属性名称可以是 dynamic 的 */
    [name + '01']: name,
    /* 方法名称可以是 dynamic 的 */
    [name + '02']() {
      console.log(this.name);
    },
  };

  console.log(obj); // { name: 'foo', foo01: 'foo', foo02: [Function: foo02] }
}
