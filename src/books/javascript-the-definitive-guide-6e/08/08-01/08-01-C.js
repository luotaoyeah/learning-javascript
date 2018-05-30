(function() {
  /*
   * function declaration statement 会被 hoisted；
   */
  console.log("\n-------------------------------------------------- 01");

  fn01(1, 2);

  function fn01(x, y) {
    console.log(x + y);
  }
})();

(function() {
  /*
   * function definition expression 不会被 hoisted；
   */
  console.log("\n-------------------------------------------------- 02");

  /*
    /!* TypeError: fn02 is not a function *!/
    fn02(1, 2);
  */

  var fn02 = function(x, y) {
    console.log(x + y);
  };
})();
