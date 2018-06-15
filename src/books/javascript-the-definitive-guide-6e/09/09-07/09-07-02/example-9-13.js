/*
 * Example 9-13. Constructor and method chaining from subclass to superclass
 */

import { Set } from "../../09-06/09-06-01/example-9-6";

(function() {
  /*
   * 定义一个 Set 的子类，其不能添加 null 和 undefined；
   */
  console.log("\n-------------------------------------------------- 01");

  function NonNullSet() {
    /* 将 Set 的 constructor 当做普通的 function 来调用 */
    Set.apply(this, arguments);
  }

  Object.setPrototypeOf(NonNullSet, Set);

  /**
   * 在 add 方法中实现自己的逻辑，最后调用父类的 add 方法；
   */
  NonNullSet.prototype.add = function() {
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] === null || arguments[i] === undefined) {
        throw new Error("cannot add null or undefined");
      }
    }

    return Set.prototype.add.apply(this, arguments);
  };

  const nonNullSet = new NonNullSet(1, 2);
  /* Error: cannot add null or undefined */
  nonNullSet.add(null);
})();
