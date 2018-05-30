import { classOf } from "../../06/06-08/06-08-02/example-6-4";

(function() {
  /*
   * function declaration statement 实际上是定义了一个 variable，
   * 然后将 function object 赋值给这个 variable；
   */
  console.log("\n-------------------------------------------------- 01");

  function fn01() {}

  /* Function */
  console.log(classOf(fn01));
})();

(function() {
  /*
   * IIFE（Immediately Invoked Function Expression）立即执行函数；
   */
  console.log("\n-------------------------------------------------- 02");

  (function(name) {
    /* tom */
    console.log(name);
  })("tom");
})();
