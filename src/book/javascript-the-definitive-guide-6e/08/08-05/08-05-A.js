/*
 * 8.5 Functions as Namespaces
 */

/*
 * JS 中有两种作用域：global scope 和 function scope, 不存在 block scope；
 * 在 function 之外定义的 variable 都属于 global scope；
 */

(function() {
  /*
   * 通常可以使用 function scope 来模拟 block scope；
   * 这样可以避免 naming conflict, 避免声明不必要的 global variables；
   */
  console.log("\n-------------------------------------------------- 01");

  function module01() {
    var counter = 1;

    function fn01() {
      return counter++;
    }

    return fn01;
  }

  /*
    /!* ReferenceError: counter is not defined *!/
    console.log(counter);
  */

  const fn02 = module01();

  /* 1 */
  console.log(fn02());
  /* 2 */
  console.log(fn02());
})();
