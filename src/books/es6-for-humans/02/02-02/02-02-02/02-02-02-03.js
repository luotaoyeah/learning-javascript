/*
 * New Syntax in ES6
 *     Arrow Functions
 *         A Tale about this
 *             Constructor Invocation
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 使用 new 关键字来调用一个 function，称之为 constructor invocation；
   * constructor 中的 this 为创建并返回的那个新的对象；
   */

  function Person(name, age) {
    this.name = name;
    this.age = age;

    console.log(this); // Person { name: 'foo', age: 18 }
  }

  console.log(new Person("foo", 18)); // Person { name: 'foo', age: 18 }
}
