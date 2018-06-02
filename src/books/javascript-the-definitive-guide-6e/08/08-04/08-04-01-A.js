/*
 * 8.4.1 Defining Your own Function Properties
 */

(function() {
  /*
   * function 是一种特殊的 object，因此 function 也可以有它自己的 properties；
   * 定义在 function 上面的 properties 可以被该 function 的所有 function invocation 共享；
   */
  console.log("\n-------------------------------------------------- 01");

  fn01.counter = 1;

  function fn01() {
    return fn01.counter++;
  }

  /* fn01 */
  console.log(fn01.name);

  /* 1 */
  console.log(fn01());
  /* 2 */
  console.log(fn01());
  /* 3 */
  console.log(fn01());
})();
