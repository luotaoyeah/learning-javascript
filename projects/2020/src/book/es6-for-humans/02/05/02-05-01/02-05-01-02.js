/*
 * New Syntax in ES6
 *     Object Literal Extensions
 *         method shorthand
 */

console.log('\n-------------------------------------------------- 01');
{
  /*
   * 在 object literal 中声明方法也可以使用简写的形式,
   */

  const name = 'foo';

  /*
   * 在一个 object literal 中声明一个 method 的三种方式：
   */
  const obj = {
    name,
    /* 使用非简写方式声明方法 */
    fn01: function () {
      console.log(this.name);
    },
    /* 使用简写方式声明方法 */
    fn02() {
      console.log(this.name);
    },
    /* 声明一个 arrow function 类型的属性 */
    fn03: () => {
      console.log(this.name);
    },
  };

  obj.fn01(); // bar
  obj.fn02(); // bar
  obj.fn03(); // undefined
}
