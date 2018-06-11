/*
 * Example 9-6. Set.js: An arbitrary set of values
 */

(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 01");

  function getObjectId(obj) {
    const prop = "|**objectid**|";

    if (!obj.hasOwnProperty(prop)) {
      obj[prop] = Set.getKey.next++;
    }

    return obj[prop];
  }

  function Set() {
    this.values = {};
    this.n = 0;
    this.add.apply(this, arguments);
  }

  Set.prototype.size = function() {
    return this.n;
  };

  Set.prototype.contains = function(value) {
    return this.values.hasOwnProperty(Set.getKey(value));
  };

  Set.prototype.forEach = function(fn, context) {
    for (var key in this.values)
      if (this.values.hasOwnProperty(key)) {
        fn.call(context, this.values[key]);
      }
  };

  Set.prototype.add = function() {
    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!this.values.hasOwnProperty(Set.getKey(arg))) {
        this.values[Set.getKey(arg)] = arg;
        this.n++;
      }
    }
  };

  Set.prototype.remove = function() {
    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      var key = Set.getKey(arg);
      if (this.values.hasOwnProperty(key)) {
        delete this.values[key];
        this.n--;
      }
    }
  };

  Set.getKey = function(obj) {
    switch (obj) {
      case null:
        return "n";
      case undefined:
        return "u";
      case true:
        return "t";
      case false:
        return "f";
      default:
        switch (typeof obj) {
          case "number":
            return "#" + obj;
          case "string":
            return "$" + obj;
          default:
            return "@" + getObjectId(obj);
        }
    }
  };

  Set.getKey.next = 100;

  const set = new Set("foo", 9, true, false, null, undefined, { name: "bar" });
  /* 7 */
  console.log(set.size());
  /* true */
  console.log(set.contains(null));
  set.remove(null);
  /* false */
  console.log(set.contains(null));
  set.add("bar");
  /* true */
  console.log(set.contains("bar"));
})();
