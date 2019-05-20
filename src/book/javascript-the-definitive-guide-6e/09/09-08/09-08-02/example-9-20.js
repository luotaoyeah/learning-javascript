/*
 * Example 9-20. A simpler immutable class
 */

import { freezeProps, hideProps } from "./example-9-19";

(function() {
  console.log("\n-------------------------------------------------- 01");

  function Range(from, to) {
    this.from = from;
    this.to = to;
    freezeProps(this);
  }

  Range.prototype = hideProps({
    constructor: Range,
    includes: function(x) {
      return this.from <= x && x <= this.to;
    },
    toString: function() {
      return "( " + this.from + ", " + this.to + " )";
    }
  });
})();
