/*
 * Example 9-15. Composing sets instead of subclassing them
 */

import { Set } from "../../09-06/09-06-01/example-9-6";
import { defineSubClass } from "../09-07-01/example-9-11";

(function() {
  /*
   * 使用组合的方式，包装一个 set 对象，返回一个新的过滤过的 set 对象；
   */
  console.log("\n-------------------------------------------------- 01");

  Set.extend = function(constructor, methods, statics) {
    return defineSubClass(Set, constructor, methods, statics);
  };

  const FilteredSet = Set.extend(
    function FilteredSet(set, filter) {
      this.set = set;
      this.filter = filter;
    },
    {
      add: function() {
        if (this.filter) {
          for (let i = 0; i < arguments.length; i++) {
            if (!this.filter(arguments[i])) {
              throw new Error("filter not pass");
            }
          }
        }

        this.set.add.apply(this.set, arguments);
        return this;
      },
      remove: function() {
        this.set.remove.apply(this.set, arguments);
        return this;
      },
      contains: function() {
        return this.set.contains.apply(this.set, arguments);
      },
      size: function() {
        return this.set.size();
      }
    }
  );
})();
