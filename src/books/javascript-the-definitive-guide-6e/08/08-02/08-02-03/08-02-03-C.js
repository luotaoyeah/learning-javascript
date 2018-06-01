(function() {
  /*
   * constructor 可以用来创建并初始化一个对象，
   * 该对象的 prototype 对象为 constructor 的 prototype 属性；
   */
  console.log("\n-------------------------------------------------- 01");

  function Fn01() {}
  /* true */
  console.log(Object.getPrototypeOf(new Fn01()) === Fn01.prototype);
})();

(function() {
  /*
   * constructor invocation 中函数体中的 this 为当前要创建的对象；
   * 即使 constructor invocation 是作为 method 调用的，其 this 仍然为要创建的对象，
   * 而不是调用它的对象；
   */
  console.log("\n-------------------------------------------------- 02");

  const obj01 = {
    fn01: function() {
      console.log(this === obj01);
    }
  };

  /* true */
  obj01.fn01();
  /* false */
  new obj01.fn01();
})();
