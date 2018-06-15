/*
 * Example 9-14. A class factory and method chaining
 */

import { Set } from "../../09-06/09-06-01/example-9-6";

(function() {
  /*
   * 创建一个指定的 Set 类的子类，
   * 并重写 add 方法，使添加的元素必须满足条件；
   */
  console.log("\n-------------------------------------------------- 01");

  function filterSetSubClass(superClass, filter) {
    const constructor = function() {
      superClass.apply(this, arguments);
    };

    Object.setPrototypeOf(constructor.prototype, superClass.prototype);

    constructor.prototype.add = function() {
      for (let i = 0; i < arguments.length; i++) {
        if (!filter(arguments[i])) {
          throw new Error("filter not pass");
        }
      }

      superClass.prototype.add.apply(this, arguments);
    };

    return constructor;
  }

  const StringSet = filterSetSubClass(Set, function(x) {
    return typeof x === "string";
  });
  const stringSet = new StringSet("foo");
  /* Error: filter not pass */
  stringSet.add(8);
})();
