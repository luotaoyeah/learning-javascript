/*
 * 9.4 Augmenting Classes
 */

(function() {
  /*
   * JS 中基于原型的继承是动态的，即可以动态地往原型对象上添加属性和方法，
   * 继承自该原型对象的对象可以动态地继承这些新添加的属性和方法；
   */
  console.log("\n-------------------------------------------------- 01");

  function Obj() {}
  Obj.prototype.fn01 = function() {
    console.log("fn01");
  };

  const obj = new Obj();
  obj.fn01();

  /* 动态地往 prototype 对象上添加方法 */
  Obj.prototype.fn02 = function() {
    console.log("fn02");
  };

  obj.fn02();
})();
