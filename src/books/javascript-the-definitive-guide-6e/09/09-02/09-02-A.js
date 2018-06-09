/*
 * 9.2 Classes and Constructors
 */

(function() {
  /*
   * constructor invocation 跟 new 关键字一起使用，返回一个新的对象；
   * constructor 的 prototype property 会作为新的对象的 prototype 对象，
   * 因此，使用同一个 constructor 创建的所有对象的 prototype 对象都是一样的；
   */
  console.log("\n-------------------------------------------------- 01");

  function Obj01() {}

  const obj01 = new Obj01();
  const obj02 = new Obj01();
  /* true */
  console.log(Object.getPrototypeOf(obj01) === Obj01.prototype);
  /* true */
  console.log(Object.getPrototypeOf(obj02) === Obj01.prototype);
})();
