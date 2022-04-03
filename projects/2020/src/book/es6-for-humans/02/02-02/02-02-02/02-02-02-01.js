/*
 * New Syntax in ES6
 *     Arrow Functions
 *         A Tale about this
 *             Function Invocation
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 外层 function 中的 this 指向 global（nodejs）/window（browser）；
   */
  (function getContext() {
    console.log(this === global); // true
  })();
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 严格模式下, 外层 function 中的 this 为 undefined；
   */
  (function getContext() {
    "use strict";
    console.log(this === global); // false
  })();
}
