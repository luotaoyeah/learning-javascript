/*
 * Classes in ES6
 *     Inheritable Built-Ins
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 可以通过继承 JS 内置的类型（如：Array, String, RegExp）,
   * 给这些类型增加新的功能
   */

  class ReversedString extends String {
    print() {
      console.log(
        this.split("")
          .reverse()
          .join("")
      );
    }
  }

  const reversedString = new ReversedString("foo");
  /* 继承了 String 类型所有的方法 */
  console.log(reversedString.toUpperCase());
  /* 增加了新的实例方法 */
  reversedString.print();
}
