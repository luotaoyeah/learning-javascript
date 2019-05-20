/*
 * Example 9-10. A Range class with weakly encapsulated endpoints
 */

(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 01");

  /**
   *
   * @param from
   * @param to
   * @constructor
   */
  function Range(from, to) {
    this.getFrom = function() {
      return from;
    };

    this.getTo = function() {
      return to;
    };
  }

  Range.prototype = {
    constructor: Range,
    includes: function(x) {
      return this.getFrom() <= x && x <= this.getTo();
    },
    toString: function() {
      return "( " + this.getFrom() + ", " + this.getTo() + " )";
    }
  };

  const range = new Range(1, 3);
  /* ( 1, 3 ) */
  console.log(range.toString());
  /* true */
  console.log(range.includes(2));
  /* false */
  console.log(range.includes(4));
})();
