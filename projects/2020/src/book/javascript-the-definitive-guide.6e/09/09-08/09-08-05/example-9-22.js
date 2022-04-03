/*
 * Example 9-22. StringSet: a set subclass using ECMAScript 5
 */

import { Set } from "../../09-06/09-06-01/example-9-6";

(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 01");

  /**
   *
   * @constructor
   */
  function StringSet() {
    this.set = Object.create(null);
    this.n = 0;
    this.add.apply(this, arguments);
  }

  StringSet.prototype = Object.create(Set.prototype, {
    constructor: {
      value: StringSet
    },
    contains: {
      value: function(x) {
        return x in this.set;
      }
    },
    size: {
      value: function() {
        return this.n;
      }
    }
  });
})();
