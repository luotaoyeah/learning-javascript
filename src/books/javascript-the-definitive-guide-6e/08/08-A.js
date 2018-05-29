/*
 * 8 Functions
 */

(function() {
  /*
   * 方法定义时的参数列表称之为 parameters，方法调用时的参数列表称之为 arguments；
   * 如果一个 object 的 property 是一个 function，该 property 称为 object 的 method；
   * 当调用 object 的 method 时，即通过一个 object 调用一个 function 时，
   * function 中的 this 为该 object；
   */
  console.log("\n-------------------------------------------------- 01");

  const obj01 = {
    fn01: function() {
      /* true */
      console.log(this === obj01);
    }
  };

  obj01.fn01();
})();

(function() {
  /*
   * 可以跟 new 一起使用，用来初始化一个 object 的 function，
   * 称之为 constructor；
   */
  console.log("\n-------------------------------------------------- 02");

  function Obj(name) {
    this.name = name;
  }

  const obj = new Obj("tom");
  /* tom */
  console.log(obj.name);
})();
