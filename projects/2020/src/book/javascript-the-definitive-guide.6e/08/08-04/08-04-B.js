(function() {
  /*
   * Array.prototype.sort() 中的参数 compare function,
   * 就是将一个 function 作为另一个 function 的 parameter 来使用；
   */
  console.log("\n-------------------------------------------------- 01");

  function fn01(x, y) {
    return x - y;
  }

  /* [ 3, 22, 111 ] */
  console.log([111, 22, 3].sort(fn01));
})();
