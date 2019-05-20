/*
 * Example 9-1. A simple JavaScript class
 */

import { inherit } from "../../06/06-01/06-01-04/example-6-1";

(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 01");

  function Range(from, to) {
    const obj = inherit(Range.methods);
    obj.from = from;
    obj.to = to;
    return obj;
  }

  Range.methods = {
    includes: function(x) {
      return this.from <= x && x <= this.to;
    },
    forEach: function(fn) {
      for (var i = Math.ceil(this.from); i <= this.to; i++) {
        fn.call(this, i);
      }
    },
    toString: function() {
      return "(" + this.from + ", " + this.to + ")";
    }
  };
  const range01 = Range(2, 4);

  /* true */
  console.log(range01.includes(3));
  /* (2, 4) */
  console.log(range01.toString());
})();
