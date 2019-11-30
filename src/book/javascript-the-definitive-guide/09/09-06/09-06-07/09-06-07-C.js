(function() {
  /*
   * 多个 constructor 可以共享同一个 prototype 属性对象,
   * 此时他们的实例对象属于相同的 type；
   */
  console.log("\n-------------------------------------------------- 01");

  const proto = { x: "x" };

  function A(name) {
    this.name = name;
  }

  A.prototype = proto;

  function B(age) {
    this.age = age;
  }

  B.prototype = proto;

  /* true */
  console.log(new A("foo") instanceof B);
  /* true */
  console.log(new B(18) instanceof A);
})();
