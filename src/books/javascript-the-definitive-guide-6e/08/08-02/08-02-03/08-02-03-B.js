(function() {
  /*
   * 如果 constructor invocation 的参数列表为空，则可以省略括号；
   */
  console.log("\n-------------------------------------------------- 01");

  function Obj01(name) {
    this.name = name || "tom";
  }

  const obj01 = new Obj01();
  /* tom */
  console.log(obj01.name);
  const obj02 = new Obj01();
  /* tom */
  console.log(obj02.name);
})();
