/*
 * 9.7.3 Composition Versus Subclassing
 */

/*
 * 在 object-oriented programming 中，有两种方式可以用来实现子类：
 * 组合（composition）和继承（inheritance）；
 */

(function() {
  /*
   * 继承
   */
  console.log("\n-------------------------------------------------- 01");

  function A() {}

  A.prototype.fn01 = function() {
    console.log("A.fno1()");
  };

  function B() {}

  Object.setPrototypeOf(B.prototype, A.prototype);

  /* A.fno1() */
  new B().fn01();
})();

(function() {
  /*
   * 组合
   */
  console.log("\n-------------------------------------------------- 02");

  function A() {}

  A.prototype.fn01 = function() {
    console.log("A.fno1()");
  };

  function B() {}

  B.prototype.fn01 = function() {
    console.log("B.fn01()");
    A.prototype.fn01.apply(this, arguments);
  };

  /*
   * B.fn01()
   * A.fno1()
   */
  new B().fn01();
})();
