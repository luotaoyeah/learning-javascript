/*
 * 9.7.4 Class Hierarchies and Abstract Classes
 */

/*
 * 有时候，多个类之间不应该相互继承，
 * 而是应该抽象出一个更高层次的共同的父类，
 * 这个父类通常是一个抽象类，
 * 它会定义一些没有具体实现的方法，其子类必须实现这些方法；
 */

(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 01");

  function AbstractHuman() {}

  AbstractHuman.prototype.walk = function() {
    throw new Error("abstract method");
  };

  function A() {}

  Object.setPrototypeOf(A.prototype, AbstractHuman.prototype);
  A.prototype.walk = function() {
    console.log("A.walk()");
  };

  /* A.walk() */
  new A().walk();

  function B() {}

  Object.setPrototypeOf(B.prototype, AbstractHuman.prototype);
  B.prototype.walk = function() {
    console.log("B.walk()");
  };

  /* B.walk() */
  new B().walk();
})();
