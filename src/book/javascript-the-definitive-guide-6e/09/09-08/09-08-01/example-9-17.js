/*
 * Example 9-17. Defining nonenumerable properties
 */

(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 01");

  var idprop = "|**objectid**|";
  var nextid = 1;

  /*
   * 没有 setter, 所以是只读的；
   */
  Object.defineProperty(Object.prototype, "objectid", {
    get: idGetter,
    enumerable: false,
    configurable: false
  });

  function idGetter() {
    if (!idprop in this) {
      if (!Object.isExtensible(this)) {
        throw new Error("cannot define id for non-extensible objects");
      }

      Object.defineProperty(this, idprop, {
        value: nextid++,
        writable: false,
        enumerable: false,
        configurable: false
      });
    }

    return this[idprop];
  }
})();
