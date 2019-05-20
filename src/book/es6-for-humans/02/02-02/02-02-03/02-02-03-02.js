/*
 * New Syntax in ES6
 *     Arrow Functions
 *         this in Arrow Functions
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * arrow function 的 this 在定义时确定, 且不能再被更改；
   */

  function Person(name) {
    this.name = name;

    this.getName = () => {
      console.log(this.name);
    };
  }

  const person = new Person("foo");
  person.getName(); // foo

  /*
   * 使用 function 调用的方式,
   * arrow function 中的 this 依然是定义时就绑定的 this,
   * 而不是调用时当前环境的 this
   */
  const getName02 = person.getName;
  getName02(); // foo
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 使用 bind(), call(), apply() 方法, 不能改变 arrow function 中的 this
   */

  function Person(name) {
    this.name = name;
    this.getName = function() {
      return () => {
        console.log(this.name);
      };
    };
  }

  const getName02 = new Person("foo").getName();

  getName02.bind({ name: "bar" })(); // foo
  getName02.call({ name: "bar" }); // foo
  getName02.apply({ name: "bar" }); // foo
}
