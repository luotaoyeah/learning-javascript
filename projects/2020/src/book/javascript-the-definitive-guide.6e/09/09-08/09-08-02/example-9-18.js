/*
 * Example 9-18. An immutable class with read-only properties and methods
 */

(function() {
  "use strict";

  /*
   *
   */
  console.log("\n-------------------------------------------------- 01");

  function Range(from, to) {
    const props = {
      from: {
        value: from,
        writable: false,
        enumerable: true,
        configurable: false
      },
      to: {
        value: to,
        writable: false,
        enumerable: true,
        configurable: false
      }
    };

    if (this instanceof Range) {
      /* 如果是使用 new 调用 constructor, 则初始化实例对象 */
      Object.defineProperties(this, props);
    } else {
      /* 如果是作为普通方法调用, 则创建对象并返回 */
      return Object.create(Range.prototype, props);
    }
  }

  Object.defineProperties(Range.prototype, {
    includes: {
      value: function(x) {
        return this.from <= x && x <= this.to;
      }
    },
    toString: {
      value: function() {
        return "( " + this.from + ", " + this.to + " )";
      }
    }
  });

  /* ( 3, 6 ) */
  console.log(new Range(3, 6).toString());
  /* ( 3, 6 ) */
  console.log(Range(3, 6).toString());

  /*
    // TypeError: Cannot assign to read only property 'from' of object '[object Object]'
    new Range(3, 6).from = 4;
  */
})();
