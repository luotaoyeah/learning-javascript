/*
 * 9.7.1 defining a Subclass
 */

import { inherit } from "../../../06/06-01/06-01-04/example-6-1";

(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 01");

  function A() {}

  A.prototype.name = "foo";

  function B() {}

  B.prototype.age = 18;

  Object.setPrototypeOf(B.prototype, A.prototype);

  const b = new B();
  /* foo */
  console.log(b.name);
  /* 18 */
  console.log(b.age);
})();

(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 02");

  function A() {}

  A.prototype.name = "foo";

  function B(age) {
    /* 此处的 age 会覆盖 B.prototype.age */
    this.age = age || 20;
  }

  B.prototype = inherit(A.prototype);

  B.prototype.age = 18;
  B.prototype.constructor = B;

  const b = new B();
  /* foo */
  console.log(b.name);
  /* 18 */
  console.log(b.age);
})();
