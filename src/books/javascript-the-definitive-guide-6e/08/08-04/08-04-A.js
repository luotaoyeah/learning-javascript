/*
 * 8.4 Functions as Values
 */

/*
 * JS 中的 function 不仅是 syntax，还是 value，
 * 即 function 可以：
 *     a. 赋值给一个 variable；
 *     b. 作为 object 的 prototype value；
 *     c. 作为 array 的 element；
 *     d. 作为 argument 传入其他的 function；
 */

(function() {
  /*
   * function 赋值给 variable；
   *
   * 使用 function declaration statement 定义一个 function 的时候，
   * 实际上是声明了一个 function object，然后将它赋值给了一个 variable；
   * 我们可以将 function 赋值给其他的 variable；
   */
  console.log("\n-------------------------------------------------- 01");

  function fn01() {
    console.log("fn01()");
  }

  /* fn01() */
  fn01();

  const fn02 = fn01;
  /* fn01() */
  fn02();
})();

(function() {
  /*
   * function 赋值给 object property；
   *
   * function 可以赋值给 object property，这时候该 property 称之为 method；
   */
  console.log("\n-------------------------------------------------- 02");

  const obj01 = {
    fn01: function() {
      console.log("fn01()");
    }
  };
  /* fn01() */
  obj01.fn01();
})();

(function() {
  /*
   * function 作为 array element；
   */
  console.log("\n-------------------------------------------------- 03");

  const array01 = [
    function(x) {
      return x * x;
    },
    9
  ];

  /* 81 */
  console.log(array01[0](array01[1]));
})();
