(function() {
  /*
   * 因为 Array-Like object 没有继承 Array.prototype,
   * 所以不能直接调用 Array.prototype 的方法,
   * 需要使用 Function.prototype.call() 间接调用；
   */
  console.log("\n-------------------------------------------------- 01");

  const obj01 = {
    0: "x",
    1: "y",
    2: "z",
    length: 3
  };

  /* x-y-z */
  console.log(Array.prototype.join.call(obj01, "-"));
  /* [ 'x', 'y', 'z' ] */
  console.log(Array.prototype.slice.call(obj01, 0));
  /* [ 'X', 'Y', 'Z' ] */
  console.log(Array.prototype.map.call(obj01, item => item.toUpperCase()));
})();
