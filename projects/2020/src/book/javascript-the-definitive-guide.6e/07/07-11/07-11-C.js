(function() {
  /*
   * function 中的 arguments 对象是一个 Array-Like object；
   */
  console.log("\n-------------------------------------------------- 01");

  (function fn01(name) {
    /* false */
    console.log(Array.isArray(arguments));
    /* { '0': 'tom' } */
    console.log(arguments);
    /* 1 */
    console.log(arguments.length);
  })("tom");
})();
