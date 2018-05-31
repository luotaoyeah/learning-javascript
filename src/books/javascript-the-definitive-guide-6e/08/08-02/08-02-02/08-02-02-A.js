/*
 * 8.2.2 Method Invocation
 */

(function() {
  /*
   * 如果一个 object 的 property value 是一个 function，
   * 这个 property 称之为 method；
   */
  console.log("\n-------------------------------------------------- 01");
  const obj01 = {};

  function fn01() {
    console.log("fn01()");
  }

  obj01.x = fn01;
  /* fn01() */
  obj01.x();
})();
