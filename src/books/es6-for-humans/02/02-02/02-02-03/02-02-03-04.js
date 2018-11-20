/*
 * New Syntax in ES6
 *     Arrow Functions
 *         this in Arrow Functions
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * arrow function 不能作为 constructor，
   * 因为 arrow function 中的 this 为当前环境的 this，
   * 它本身没有自己的 this；
   */

  const Person = name => {
    this.name = name;
  };

  new Person("foo"); // TypeError: Person is not a constructor
}
