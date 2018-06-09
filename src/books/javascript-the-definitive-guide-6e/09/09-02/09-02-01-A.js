/*
 * 9.2.1 Constructors and Class Identity
 */

(function() {
  /*
   * 如果两个对象的 prototype 对象相同，则称它们是同一个 class 的实例对象；
   */
  console.log("\n-------------------------------------------------- 01");

  function Obj() {}

  const obj02 = {};
  const obj03 = {};

  Object.setPrototypeOf(obj02, Obj.prototype);
  Object.setPrototypeOf(obj03, Obj.prototype);

  /* true */
  console.log(obj02 instanceof Obj);
  /* true */
  console.log(obj03 instanceof Obj);
})();

(function() {
  /*
   * 两个 constructor 的 protptype 属性可以指向同一个对象，
   * 则它们创建的对象属于同一个 class；
   */
  console.log("\n-------------------------------------------------- 02");

  const prototype01 = {};

  function Obj01() {}

  function Obj02() {}

  Obj01.prototype = prototype01;
  Obj02.prototype = prototype01;

  /* true */
  console.log(new Obj01() instanceof Obj02);
  /* true */
  console.log(new Obj02() instanceof Obj01);
})();

(function() {
  /*
   * instanceof 用来检查某个对象是否是某个 constructor 的 instance；
   * 实际上它检查的是该对象是否继承了该 constructor 的 prototype 属性；
   */
  console.log("\n-------------------------------------------------- 03");

  function fn01() {}

  fn01.prototype = {};
  const obj01 = {};
  Object.setPrototypeOf(obj01, fn01.prototype);
  /* true */
  console.log(obj01 instanceof fn01);
})();
