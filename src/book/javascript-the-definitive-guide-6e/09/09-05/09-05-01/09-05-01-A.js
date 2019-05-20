/*
 * 9.5.1 The instanceof operator
 */

(function() {
  /*
   * instanceof 用来判断某个对象是否是某个 constructor 的实例对象；
   * 左边为要检查的对象, 右边为要检查的 constructor；
   * 当对象直接地继承了 constructor 的 property 属性对象时, 返回 true；
   */
  console.log("\n-------------------------------------------------- 01");

  function Obj01() {}

  /* true */
  console.log(new Obj01() instanceof Obj01);

  function Obj02() {}

  const obj02 = {};
  Object.setPrototypeOf(obj02, Obj02.prototype);
  /* true */
  console.log(obj02 instanceof Obj02);
})();

(function() {
  /*
   * 当对象间接地继承了 constructor 的 property 属性对象时, 返回 true；
   */
  console.log("\n-------------------------------------------------- 02");

  function Obj01() {}

  function Obj02() {}

  const obj01 = {};

  Object.setPrototypeOf(Obj02.prototype, Obj01.prototype);
  Object.setPrototypeOf(obj01, Obj02.prototype);
  /* true */
  console.log(obj01 instanceof Obj01);
  /* true */
  console.log(obj01 instanceof Obj02);
})();
