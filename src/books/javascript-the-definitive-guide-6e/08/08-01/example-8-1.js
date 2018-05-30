/*
 * Example 8-1. Defining JavaScript functions
 */

(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 01");

  function printProps(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`);
      }
    }
  }

  printProps({ x: "x" });
})();

(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 02");

  function factorial01(n) {
    if (n <= 1) {
      return n;
    } else {
      return n * factorial01(n - 1);
    }
  }

  /* 5! = 120 */
  console.log(` 5! = ${factorial01(5)}`);

  /**
   * function definition expression 中的函数名是可选的，
   * 但是如果在函数体中需要递归调用函数自身，
   * 则此时必须指定函数名；
   *
   * 此时，该函数名只在函数体内有效；
   *
   * @param n
   */
  const factorial02 = function f(n) {
    if (n <= 1) {
      return n;
    } else {
      return n * f(n - 1);
    }
  };

  /*
    /!* ReferenceError: f is not defined *!/
    console.log(f);
  */

  /* 5! = 120 */
  console.log(` 5! = ${factorial02(5)}`);
})();
