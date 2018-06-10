/*
 * 9.5 Classes and Types
 */

import { classOf } from "../../06/06-08/06-08-02/example-6-4";

(function() {
  /*
   * JS 中定义了一些基本的 type，可以使用 typeof 来获取某个对象的 type；
   */
  console.log("\n-------------------------------------------------- 01");
  /* object */
  console.log(typeof null);
  /* undefined */
  console.log(typeof undefined);
  /* string */
  console.log(typeof "");
  /* number */
  console.log(typeof 0);
  /* boolean */
  console.log(typeof true);
  /* function */
  console.log(typeof (() => {}));
  /* object */
  console.log(typeof []);
  /* object */
  console.log(typeof {});
  /* object */
  console.log(typeof /js/);
  /* object */
  console.log(typeof new Date());
})();

(function() {
  /*
   * 可以使用 Object.prototype.toString() 来间接地获取某个对象的 class；
   */
  console.log("\n-------------------------------------------------- 02");
  /* Null */
  console.log(classOf(null));
  /* Undefined */
  console.log(classOf(undefined));
  /* String */
  console.log(classOf(""));
  /* Number */
  console.log(classOf(0));
  /* Boolean */
  console.log(classOf(true));
  /* Function */
  console.log(classOf(() => {}));
  /* Array */
  console.log(classOf([]));
  /* Object */
  console.log(classOf({}));
  /* RegExp */
  console.log(classOf(/js/));
  /* Date */
  console.log(classOf(new Date()));
})();

(function() {
  /*
   * 但是对于自定义的 constructor，
   * 使用 Object.prototype.toString() 间接地获取到的 class 始终是 Object；
   */
  console.log("\n-------------------------------------------------- 03");

  function Obj() {}
  /* Object */
  console.log(classOf(new Obj()));
})();
