/*
 * 9.6.5 Borrowing Methods
 */

(function() {
  /*
   * 不同 class 之间可以共享方法,
   * 即它们的 prototype 对象的属性指向同一个方法；
   */
  console.log("\n-------------------------------------------------- 01");

  function fn01() {
    console.log("fn01");
  }

  function Obj01() {}

  Obj01.prototype.fn01 = fn01;

  function Obj02() {}

  Obj02.prototype.fn01 = fn01;

  /* true */
  console.log(new Obj01().fn01 === new Obj02().fn01);
})();
