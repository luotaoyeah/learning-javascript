(function() {
  /*
   * method invocation 和 function invocation 的区别：
   *     method invocation 中函数体中的 this 为当前调用该函数的 object；
   */
  console.log("\n-------------------------------------------------- 01");
  const obj01 = {
    x: function fn01() {
      console.log(this === obj01);
    }
  };

  /* true */
  obj01.x();
})();
