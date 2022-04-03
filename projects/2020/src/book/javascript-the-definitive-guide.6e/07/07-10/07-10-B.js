import { classOf } from "../../06/06-08/06-08-02/example-6-4";

(function() {
  /*
   * 不能使用 instanceof 来判断某个对象是否是 array；
   * 因为在浏览器中可能存在多个打开的窗口, 或者同一个窗口中存在多个 frame,
   * 其中一个里面的 array 并不是另外一个的 instance；
   *
   * 可以使用对象的 class attribute 来判断某个对象是否是 array；
   */
  console.log("\n-------------------------------------------------- 01");

  const isArray = obj => typeof obj === "object" && classOf(obj) === "Array";

  /* true */
  console.log(isArray([]));
  /* false */
  console.log(isArray({}));
  /* true */
  console.log(isArray(new Array(9)));
})();
