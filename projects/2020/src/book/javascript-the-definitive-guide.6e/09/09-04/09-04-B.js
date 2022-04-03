(function() {
  /*
   * 内置对象的 prototype 对象同样可以动态地进行扩展；
   */
  console.log("\n-------------------------------------------------- 01");

  Number.prototype.times = function(fn, context) {
    for (var i = 0; i < this; i++) {
      fn.call(context, i);
    }
  };

  (3).times(function(index) {
    console.log(index + ": hello");
  });
})();
