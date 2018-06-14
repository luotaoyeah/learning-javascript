/*
 * Example 9-12. SingletonSet: a simple set subclass
 */

import { inherit } from "../../../06/06-01/06-01-04/example-6-1";
import { Set } from "../../09-06/09-06-01/example-9-6";
import { extend } from "../../../08/08-05/example-8-3";

(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 01");

  /**
   * @param member
   * @constructor
   */
  function SingletonSet(member) {
    this.member = member;
  }

  SingletonSet.prototype = inherit(Set.prototype);

  extend(SingletonSet.prototype, {
    constructor: SingletonSet,
    size: function() {
      return 1;
    },
    add: function() {
      throw new Error("readonly");
    },
    remove: function() {
      throw new Error("readonly");
    },
    contains: function(x) {
      return this.member === x;
    },
    forEach: function(fn, context) {
      fn.call(context, this.member);
    }
  });

  const singletonSet = new SingletonSet(4);
  /* false */
  console.log(singletonSet.contains(5));
  /* 1 */
  console.log(singletonSet.size());
  singletonSet.forEach(x => {
    /* 4 */
    console.log(x);
  });
})();
