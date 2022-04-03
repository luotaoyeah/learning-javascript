/*
 * New Syntax in ES6
 *     Arrow Functions
 *         Using Arrow Functions
 */

/*
 * 对于 arrow function 来说,
 * 最重要的一点是：
 *     弄清楚 arrow function 到底是在什么时候定义的,
 *     就能弄清楚 arrow function 中的 this 到底是什么；
 */
console.log("\n-------------------------------------------------- 01");
{
  function Person(name) {
    this.name = name;
    this.getName = function() {
      setTimeout(function() {
        console.log(this.name);
      });
    };
  }

  new Person("foo").getName(); // undefined
}

console.log("\n-------------------------------------------------- 02");
{
  function Person(name) {
    this.name = name;
    this.getName = function() {
      setTimeout(() => {
        console.log(this.name);
      });
    };
  }

  /*
   * getName() 方法调用时, 里面的 arrow function 才会定义；
   */
  new Person("foo").getName(); // foo
}
