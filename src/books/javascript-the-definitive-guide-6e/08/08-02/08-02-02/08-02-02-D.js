(function() {
  /*
   * method chaining
   *
   * 如果一个 method 返回的是一个对象，这个对象又可以作为下一个 method invocation 的调用对象；
   * 这样，多个 method invocation 可以链接起来；
   */
  console.log("\n-------------------------------------------------- 01");

  const obj01 = {
    run: function() {
      console.log("running");
      return this;
    },
    sleep: function() {
      console.log("sleeping");
      return this;
    },
    study: function() {
      console.log("studying");
      return this;
    }
  };

  obj01
    .run()
    .study()
    .sleep();
})();
