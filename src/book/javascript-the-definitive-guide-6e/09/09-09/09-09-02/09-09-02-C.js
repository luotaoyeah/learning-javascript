(function() {
  /*
   * 可以将 module function 当成一个 constructor,
   * 使用 new 来调用, 然后将要暴露的方法添加为 this 的属性；
   */
  console.log("\n-------------------------------------------------- 01");

  var sets = new (function() {
    this.Set = function() {
      /*  */
    };
    this.StringSet = function() {
      /*  */
    };
    this.SingletonSet = function() {
      /*  */
    };
  })();

  /* { Set: [Function], StringSet: [Function], SingletonSet: [Function] } */
  console.log(sets);
})();
