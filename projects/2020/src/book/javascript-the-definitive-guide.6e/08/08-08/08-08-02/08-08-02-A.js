/*
 * 8.8.2 Higher-Order Functions
 */

/*
 * higher-order function 是指操作 function 的 function；
 * 如果一个 function 的一个或多个参数是 function, 且返回值是 function,
 * 则它是一个 higher-order function；
 */

(function() {
  /*
   *
   */
  console.log("\n-------------------------------------------------- 01");

  function not(fn) {
    return function() {
      return !fn.apply(this, arguments);
    };
  }

  function even(n) {
    return n % 2 === 0;
  }

  const odd = not(even);

  /* true */
  console.log(even(2));
  /* false */
  console.log(odd(2));
})();
