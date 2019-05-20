(function() {
  /*
   * method invocation 实际上也是一个 property access expression,
   * 因此即可以使用（.）, 也可以使用（[]）；
   */
  console.log("\n-------------------------------------------------- 01");
  const obj01 = {
    x: function fn01() {
      console.log(this === obj01);
    }
  };

  /* true */
  obj01.x();
  /* true */
  obj01["x"]();
})();
