/*
 * New Syntax in ES6
 *     Arrow Functions
 *         this in Arrow Functions
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * arrow function 的设计目标之一：从词法上（lexically）绑定上下文（context）；
   * arrow function 中的 this 为：
   *     函数定义时, 所在的上下文中的 this；
   *
   * 简单来说：
   *     普通 function 中的 this 在调用时确定,
   *     arrow function 中的 this 在定义时确定；
   */

  function Person(name) {
    this.name = name;

    this.getName = function() {
      /*
       * 下面的 innerGetName(); 是一个 function 调用,
       * 因此 function 中的 this 为 global；
       */
      return function innerGetName() {
        return this.name;
      };
    };
  }

  const person = new Person("foo");
  const innerGetName = person.getName();
  innerGetName();
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 使用 arrow function 捕获 this；
   */
  function Person(name) {
    this.name = name;

    this.getName = function() {
      /*
       * 此处的 arrow function 在定义时会捕获当前环境的 this,
       * 而当前环境的 this 正是这个新创建的对象；
       */
      return () => {
        console.log(this.name);
      };
    };
  }

  new Person("foo").getName()(); // foo
}
