/*
 * 9.6.2 Example: Enumerated Types
 */

import { Enumeration } from "./example-9-7";

(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 01");

  const E = Enumeration({ A: 1, B: 2, C: 3 });

  /* true */
  console.log(E.A instanceof E);
  /* true */
  console.log(E.A.constructor === E);
  /* A */
  console.log(E.A.toString());
  /* 1 */
  console.log(E.A.valueOf());
})();
