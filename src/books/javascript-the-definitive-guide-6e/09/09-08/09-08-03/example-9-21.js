/*
 * Example 9-21. A Range class with strongly encapsulated endpoints
 */

import { hideProps } from "../09-08-02/example-9-19";

(function() {
  /*
   * from 必须小于等于 to；
   */
  console.log("\n-------------------------------------------------- 01");

  const error = new Error("from must be <= to");

  function Range(from, to) {
    if (from > to) {
      throw error;
    }

    function getFrom() {
      return from;
    }

    function setFrom(value) {
      if (value > to) {
        throw error;
      }

      from = value;
    }

    function getTo() {
      return to;
    }

    function setTo(value) {
      if (from > value) {
        throw error;
      }

      to = value;
    }

    Object.defineProperties(this, {
      from: {
        get: getFrom,
        set: setFrom,
        enumerable: true,
        configurable: false
      },
      to: {
        get: getTo,
        set: setTo,
        enumerable: true,
        configurable: false
      }
    });
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
