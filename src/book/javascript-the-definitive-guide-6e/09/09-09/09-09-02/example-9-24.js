/*
 * Example 9-24. A Set class in a module function
 */

(function() {
  /*
   * 使用了 IIEF, 因此此处的 invocation() 方法是一个 function definition expression,
   * 而不是一个 function declaration statement；
   *
   * 使用 function scope 作为 namespace,
   * 该 module 只暴露了 Set() 给外部访问；
   */
  console.log("\n-------------------------------------------------- 01");

  var Set = (function invocation() {
    function Set() {
      this.values = {};
      this.n = 0;
      this.add.apply(this, arguments);
    }

    Set.prototype.add = function() {
      /*  */
    };
    Set.prototype.size = function() {
      return this.n;
    };
    Set.prototype.remove = function() {
      /*  */
    };
    Set.prototype.forEach = function() {
      /*  */
    };

    function valueToString() {
      /*  */
    }

    function getObjectId() {
      /*  */
    }

    var nextId = 1;

    return Set;
  })();
})();
