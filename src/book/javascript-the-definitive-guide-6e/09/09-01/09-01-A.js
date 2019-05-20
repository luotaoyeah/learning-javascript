/*
 * 9.1 Classes and Prototypes
 */

import { inherit } from "../../06/06-01/06-01-04/example-6-1";

(function() {
  /*
   * 如果一组对象拥有相同的 prototype 对象, 则称它们属于同一个 class；
   */
  console.log("\n-------------------------------------------------- 01");

  const obj01 = { x: "" };
  const obj02 = inherit(obj01);
  const obj03 = inherit(obj01);
  /* true */
  console.log(obj02.x === obj03.x);
})();
