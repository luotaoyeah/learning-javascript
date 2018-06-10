(function() {
  /*
   * 可以使用 Object.prototype.isPrototypeOf() 来检查某个对象是否在另一个对象的原型链上；
   */
  console.log("\n-------------------------------------------------- 01");

  function Obj01() {}

  function Obj02() {}

  const obj01 = {};

  Object.setPrototypeOf(Obj02.prototype, Obj01.prototype);
  Object.setPrototypeOf(obj01, Obj02.prototype);
  /* true */
  console.log(Obj01.prototype.isPrototypeOf(obj01));
  /* true */
  console.log(Obj02.prototype.isPrototypeOf(obj01));
})();

(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 02");

  const obj01 = {};
  const obj02 = {};
  const obj03 = {};
  Object.setPrototypeOf(obj02, obj01);
  Object.setPrototypeOf(obj03, obj02);

  /* true */
  console.log(obj01.isPrototypeOf(obj03));
  /* true */
  console.log(obj02.isPrototypeOf(obj03));
})();
