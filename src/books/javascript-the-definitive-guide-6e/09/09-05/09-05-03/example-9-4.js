/*
 * Example 9-4. A type() function to determine the type of a value
 */

import { classOf } from "../../../06/06-08/06-08-02/example-6-4";

(function() {
  /*
   * 按照以下步骤，返回对象的 type；
   *     a. 如果是 null，返回 "null"；
   *     b. 如果是 NaN，返回 "nan"；
   *     c. 如果 typeof 的值不是 "object"，返回 typeof 的值；
   *     d. 如果对象的 class 不是 "Object"，返回其 class；
   *     e. 如果对象有 constructor 属性，且 constructor 有 name 属性，返回 constructor 的 name；
   *     f. 返回 "Object"；
   */
  console.log("\n-------------------------------------------------- 01");

  Function.prototype.getName = function() {
    if ("name" in this) {
      return this.name;
    }

    this.name = this.toString().match(/function\s*([^(]*)\(/)[1];
    return this.name;
  };

  function type(obj) {
    if (obj === null) {
      return "null";
    }

    if (obj !== obj) {
      return "nan";
    }

    if (typeof obj !== "object") {
      return typeof obj;
    }

    if (classOf(obj) !== "Object") {
      return classOf(obj);
    }

    if (obj.constructor && typeof obj.constructor === "function") {
      return obj.constructor.getName();
    }

    return "Object";
  }

  /* null */
  console.log(type(null));
  /* nan */
  console.log(type(Number.NaN));
  /* function */
  console.log(type(() => {}));
  /* Obj01 */
  console.log(type(new function Obj01() {}()));
})();

(function() {
  /*
   * 使用对象的 constructor 的 name 属性来表示对象的 type，
   * 这种方式有下面的缺点：
   *     1. 有些对象没有 constructor 属性；
   *     2. constructor 可能没有 name 属性；
   */
  console.log("\n-------------------------------------------------- 02");

  function Obj() {}

  Obj.prototype = {};
  Object.setPrototypeOf(Obj.prototype, null);

  const obj01 = new Obj();
  /* undefined */
  console.log(obj01.constructor);
})();
