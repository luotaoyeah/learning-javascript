(function() {
  /*
   * 在 strict mode 中，第一个参数传的是什么，function 中的 this 就是什么；
   */
  console.log("\n-------------------------------------------------- 01");

  (function() {
    "use strict";

    (function() {
      /* null */
      console.log(this);
    }.call(null));

    (function() {
      /* undefined */
      console.log(this);
    }.call(undefined));

    (function() {
      /* 0 */
      console.log(this);
    }.call(0));
  })();
})();

(function() {
  /*
   * 在 non-strict mode 中，
   * 如果第一个参数是 null 或者 undefined，会被替换为 global；
   * 如果第一个参数是 primitive value，会被替换为其包装类型；
   */
  console.log("\n-------------------------------------------------- 02");

  (function() {
    (function() {
      /* true */
      console.log(this === global);
    }.call(null));

    (function() {
      /* true */
      console.log(this === global);
    }.call(undefined));

    (function() {
      /* [Number: 0] */
      console.log(this);
    }.call(0));
  })();
})();
