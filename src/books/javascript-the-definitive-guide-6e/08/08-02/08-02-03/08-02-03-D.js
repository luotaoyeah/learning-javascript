(function() {
  /*
   * 通常情况，constructor 中不会使用 return 语句，
   * constructor invocation 隐式返回创建的实例对象；
   */
  console.log("\n-------------------------------------------------- 01");

  function Fn01(name) {
    this.name = name;
  }

  /* Fn01 { name: 'tom' } */
  console.log(new Fn01("tom"));
})();

(function() {
  /*
   * 如果 constructor 显式地使用 return 返回一个对象，
   * 那么这个对象会作为 constructor invocation 的返回值；
   */
  console.log("\n-------------------------------------------------- 02");

  const obj01 = { name: "cat" };

  function Fn01(name) {
    this.name = name;
    return obj01;
  }

  /* true */
  console.log(new Fn01("tom") === obj01);
})();

(function() {
  /*
   * 如果 constructor 显式地使用 return 返回一个 primitive value 或者 undefined，
   * 那么 constructor invocation 的返回值仍然是创建的实例对象；
   */
  console.log("\n-------------------------------------------------- 03");

  function Fn01(name) {
    this.name = name;
    return 18;
  }

  /* Fn01 { name: 'tom' } */
  console.log(new Fn01("tom"));
})();
