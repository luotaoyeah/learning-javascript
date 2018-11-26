/*
 * Destructuring
 *     Destructured Parameters
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 函数参数声明也可以使用 destructure
   */

  function sum([num01, num02 = 0]) {
    console.log(num01 + num02);
  }

  sum([1, 2]); // 3
  sum([1]); // 1
  sum([]); // NaN
}
