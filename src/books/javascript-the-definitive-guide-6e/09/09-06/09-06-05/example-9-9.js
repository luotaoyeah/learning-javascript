/*
 * Example 9-9. Generic methods for borrowing
 */

(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 01");

  var generic = {
    toString: function() {
      var str = "[ ";

      if (this.constructor && this.constructor.name) {
        str += this.constructor.name + ": ";
      }

      let n = 0;
      for (var key in this) {
        if (!this.hasOwnProperty(key)) {
          continue;
        }

        var value = this[key];
        if (typeof value === "function") {
          continue;
        }

        if (n++) {
          str += ", ";
        }

        str += key + " = " + value;
      }

      return str + " ]";
    },
    equals: function(obj) {
      if (this === obj) {
        return true;
      }

      if (obj === null) {
        return false;
      }

      if (this.constructor !== obj.constructor) {
        return false;
      }

      for (let key in this) {
        if (!this.hasOwnProperty(key)) {
          continue;
        }

        if (this[key] !== obj[key]) {
          return false;
        }
      }

      return true;
    }
  };

  /**
   *
   * @param from
   * @param to
   * @constructor
   */
  function Range(from, to) {
    this.from = from;
    this.to = to;
  }

  Range.prototype.toString = generic.toString;
  /* [ Range: from = 1, to = 2 ] */
  console.log(new Range(1, 2).toString());
})();
