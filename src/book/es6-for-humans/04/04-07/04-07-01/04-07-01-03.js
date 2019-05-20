/*
 * Classes in ES6
 *     Static Methods and Properties
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 当前, 不能直接在 class 中声明静态属性
   */

  class Person {}

  Person.name = "foo";
  console.log(Person.name);
}

console.log("\n-------------------------------------------------- 02");
{
  function Person() {}

  Person.name = "foo";
  console.log(Person.name); // Person
}
