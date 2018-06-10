/*
 * 9.5.2 The constructor Property
 */

(function() {
  /*
   * 对象的 constructor 属性默认指向它的 constructor；
   */
  console.log("\n-------------------------------------------------- 01");

  function Obj() {}

  /* true */
  console.log(new Obj().constructor === Obj);
  /* true */
  console.log((1).constructor === Number);
  /* true */
  console.log([].constructor === Array);
})();

(function() {
  /*
   * 对象的 constructor 属性是从它的 prototype 对象继承而来，
   * 而它的 prototype 对象可能并没有 constructor 属性；
   */
  console.log("\n-------------------------------------------------- 02");

  function Obj() {}

  Obj.prototype = {};

  /* true */
  console.log(new Obj().constructor === undefined);
})();
