/*
 * New Syntax in ES6
 *     Default Function Parameters
 *         lasy evaluate
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * function default parameter 可以是任意合法的 expression，比如 IIFE
   */

  function fn01(x, y = (() => 1)()) {
    console.log(x, y);
  }

  fn01(1, undefined); // 1 1
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * function default parameter 是延迟求值的（lazily evaluate），
   * 即，只有当需要用到该默认值时，才会计算默认值表达式；
   */

  function fn01(
    x,
    y = (() => {
      console.log("default");
      return 1;
    })()
  ) {
    console.log(x, y);
  }

  /*
   * 此处传递了参数 y，所以参数 y 不会使用默认值，
   * 因此参数 y 的默认值表达式不会被执行；
   */
  fn01(1, 1); // 1 1
}
