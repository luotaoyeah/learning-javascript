/*
 * Example 8-3. The extend() function, patched if necessary
 */
(function() {
  /*
   * 在低版本的 IE 中，for/in loop 存在一个 BUG：
   *     如果遍历的对象上存在属性 prop01，且对象的 prototype 对象上也存在属性 prop01，
   *     且 prototype 对象的该属性是 non-enumerable 的，则 for/in 不会遍历对象上的这个 property；
   */
  console.log("\n-------------------------------------------------- 01");

  var extend = (function() {
    for (var p in { toString: null }) {
      return function(obj) {
        for (var i = 1; i < arguments.length; i++) {
          var src = arguments[i];
          for (var key in src) {
            obj[key] = src[key];
          }
        }
      };
    }

    var properties = [
      "toString",
      "valueOf",
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString"
    ];

    return function(obj) {
      for (var i = 1; i < arguments.length; i++) {
        var src = arguments[i];
        for (var key in src) {
          obj[key] = src[key];
        }
      }

      for (var i = 0; i < properties.length; i++) {
        var key = properties[i];
        if (src.hasOwnProperty(key)) {
          obj[key] = src[key];
        }
      }
    };
  })();
})();
