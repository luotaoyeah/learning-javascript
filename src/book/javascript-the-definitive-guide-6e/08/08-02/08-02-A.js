/*
 * 8.2 Invoking Functions
 */

/*
 * 函数体中的代码不是在函数定义的时候执行,
 * 而是在函数调用的时候执行；
 */

/*
 * 调用函数有 4 种方式：
 *     a. 作为 function 调用；
 *     b. 作为 method 调用；
 *     c. 作为 constructor 调用；
 *     d. 使用 Function.prototype.call() 或者 Function.prototype.apply() 调用；
 */

(function() {
  /*
   * 作为 function 调用；
   */
  console.log("\n-------------------------------------------------- 01");

  function fn01() {
    console.log("fn01()");
  }

  fn01();
})();

(function() {
  /*
   * 作为 method 调用；
   */
  console.log("\n-------------------------------------------------- 02");

  const obj01 = {
    name: "tom",
    fn02() {
      console.log("fn02()", this.name);
    }
  };
  obj01.fn02();
})();

(function() {
  /*
   * 作为 constructor 调用；
   */
  console.log("\n-------------------------------------------------- 03");

  function fn03(name) {
    this.name = name;
    console.log("fn03()", this.name);
  }

  const obj03 = new fn03("tom");
})();

(function() {
  /*
   * 使用 Function.prototype.call() 和 Function.prototype.apply() 调用；
   */
  console.log("\n-------------------------------------------------- 04");

  function fn04() {
    console.log("fn04()", this.name);
  }

  fn04.call({ name: "tom" });
  fn04.apply({ name: "tom" });
})();
