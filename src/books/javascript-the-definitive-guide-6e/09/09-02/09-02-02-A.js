/*
 * 9.2.2 The constructor Property
 */

(function() {
  /*
   * 任何 function 都可以作为 constructor，因此任何 function 默认都有一个 prototype 属性，
   */
  console.log("\n-------------------------------------------------- 01");

  function fn01() {}

  const fn02 = function() {};

  /* true */
  console.log(!!fn01.prototype);
  /* true */
  console.log(!!fn02.prototype);
})();

(function() {
  /*
   * function 的 prototype 属性是一个对象，
   * 其有一个 non-enumerable 属性 constructor，指向该 function 本身；
   */
  console.log("\n-------------------------------------------------- 02");

  function fn01() {}

  /* true */
  console.log(fn01.prototype.constructor === fn01);
})();

(function() {
  /*
   * 因为对象的 prototype 对象为其 constructor 的 prototype 属性，
   * 因此对象都有一个 constructor 属性，指向该对象的 constructor；
   */
  console.log("\n-------------------------------------------------- 03");

  /* true */
  console.log({}.constructor === Object);
  /* true */
  console.log([].constructor === Array);

  function Obj() {}

  /* true */
  console.log(new Obj().constructor === Obj);
})();
