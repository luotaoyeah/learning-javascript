/*
 * New Syntax in ES6
 *     Arrow Functions
 *         A Tale about this
 *             Method Invocation
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 调用 method 时, method 中的 this 为调用该 method 的对象；
   */

  const myObj = {
    name: "fancy",
    operation() {
      console.log(this);
    }
  };

  myObj.operation(); // { name: 'fancy', operation: [Function: operation] }
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 将 method 赋值给变量 x, 然后将 x 作为一个 function 进行调用,
   * 此处是一个 function 调用, 而不是一个 method 调用,
   * 因此 function 中的 this 为 global；
   */

  const myObj = {
    name: "fancy",
    operation() {
      console.log(this);
    }
  };

  const x = myObj.operation;
  x(); // global
}

console.log("\n-------------------------------------------------- 03");
{
  /*
   * 可以通过 Function.call() 方法指定 function 调用中的 this 对象；
   */

  const myObj = {
    name: "fancy",
    operation() {
      console.log(this);
    }
  };

  const x = myObj.operation;
  x.call(myObj); // { name: 'fancy', operation: [Function: operation] }
}
