/*
 * 8.7.5 The toString() Method
 */

(function() {
  /*
   * 对于自定义的 function, toString() 方法打印该 function 的源码；
   */
  console.log("\n-------------------------------------------------- 01");

  function fn01() {
    /* fn01 */
  }

  const fn02 = function() {
    /* fn02 */
  };

  console.log(fn01.toString());
  console.log(fn02.toString());
})();

(function() {
  /*
   * 对于内置的 function, toString() 方法打印该 function 的源码,
   * 但是方法体为 '[native code]'；
   */
  console.log("\n-------------------------------------------------- 02");

  /* function Date() { [native code] } */
  console.log(Date.toString());
})();
