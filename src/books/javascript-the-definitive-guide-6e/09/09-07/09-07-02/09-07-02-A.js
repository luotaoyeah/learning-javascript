/*
 * 9.7.2 Constructor and Method Chaining
 */

(function() {
  /*
   * 如果在子类中声明了跟父类同名的方法，父类的方法会被子类的方法覆盖；
   */
  console.log("\n-------------------------------------------------- 01");

  function A() {}

  A.prototype.name = "foo";
  A.prototype.fn01 = function() {
    console.log("A.fn01()");
  };

  function B() {}

  B.prototype.age = 18;
  B.prototype.fn01 = function() {
    console.log("B.fn01()");
  };

  Object.setPrototypeOf(B.prototype, A.prototype);

  const b = new B();

  /* foo */
  console.log(b.name);
  /* 18 */
  console.log(b.age);
  /* B.fn01() */
  b.fn01();
})();
